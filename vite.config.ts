import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit(),
  {
    name: 'sveltekit-socket-io',
    configureServer(server) {
      if (server.httpServer) {
        const io = new Server(server.httpServer);
        globalThis["io"] = io;
      }
    }
  },]
};

export default config;
