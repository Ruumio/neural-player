import db from "$lib/db";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const GET: RequestHandler = async function() {
  return json(await db.dataPoint.findMany())
}
