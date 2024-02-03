/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   test: {
  //     globals: true,
  //     enviroment: 'jsdom'
  //   }
  // },
  // test: {
  //   // globals: true,
  //   enviroments: 'jsdom'
  // },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  }
})
