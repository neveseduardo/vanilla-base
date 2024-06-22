import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    outDir: 'root',
    chunkSizeWarningLimit: 1024 * 6,
  },
  server: {
    port: 8080,
    host: true,
    open: true,
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  base: '/vanilla-base/', // Configuração de base com o sufixo '/vanilla-base/'
  server: {
    proxy: {
      '/': {
        target: 'http://localhost:8080', // Altere para o seu servidor de desenvolvimento, se aplicável
        rewrite: (path) => path.replace(/^\/vanilla-base/, '') // Remova o sufixo '/vanilla-base/' das requisições
      }
    }
  }
});