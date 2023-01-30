import { PrismaClient, type DataPoint } from "@prisma/client";
import * as tf from "@tensorflow/tfjs-node";

const db = new PrismaClient();

const model = tf.sequential();
model.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [20] }));
model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));

// Compile the model
model.compile({
  optimizer: 'sgd',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});

function splitData(data: number[][], percentage: number) {
  const splitIndex = Math.floor(data.length * percentage);
  return [data.slice(0, splitIndex), data.slice(splitIndex)];
}

async function generateData(points: DataPoint[]) {

  const inputData: number[][] = [];
  const results: number[][] = [];

  for (let i = 0; i < points.length - 12; i++) {

    const input: number[] = [];

    for (let j = 1; j <= 11; j++) {
      const p1 = points[i + j];
      const p2 = points[i + j + 1];
      input.push((p2.x - p1.x) / 1000);
      input.push((p2.y - p1.y) / 1000);
    }

    if (Math.max(...input) !== 0 || Math.min(...input) !== 0) {
      const res = input.splice(-2);
      inputData.push(input);
      results.push(res);
      console.log(input, res)
    }

  }

  return [
    inputData,
    results
  ]
}  // train()


async function train(points: DataPoint[]) {

  const [inputVectors, results] = await generateData(points);
  const [trainData, testData] = splitData(inputVectors, 0.8);
  const [trainResults, testResults] = splitData(results, 0.8);

  for (let i = 0; i < 100; i++) {
    const response = await model.fit(tf.tensor(trainData), tf.tensor(trainResults), {
      epochs: 10,
      batchSize: 32,
      validationData: [tf.tensor(testData), tf.tensor(testResults)],
    });
    console.log(response.history.loss[0]);
  }
}

async function predict(points: DataPoint[]) {

  const [inputVectors] = await generateData(points);

  console.log("Input:", inputVectors[0]);
  const result = model.predict(tf.tensor([inputVectors[0]]));
  console.log(result.dataSync());

}

async function save() {
  await model.save('file://model');
}

async function main() {



  const points = await db.dataPoint.findMany({
    take: 1000
  })

  await train(points)

  await save()

  const p = await db.dataPoint.findMany({
    skip: 1000,
    take: 500
  })

  await predict(p)

  //
  //   const inputData = tf.tensor2d([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]);
  // const result = model.predict(inputData);


}

main()
