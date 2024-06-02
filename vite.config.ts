import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // manual chunk here as needed
          // console.log(id);
          // if (id.includes('src/nest1')) {
          //   return 'nested1';
          // } else if (id.includes('src/nest2')) {
          //   return 'nested2';
          // } else {
          //   return 'index';
          // }
        },
      },
    },
  },
})
