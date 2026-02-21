import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/LOTERY-ANALIZER-AI/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Analizador Pro RD',
        short_name: 'Loterias RD',
        theme_color: '#080b14',
        background_color: '#080b14',
        display: 'standalone',
        scope: '/LOTERY-ANALIZER-AI/',
        start_url: '/LOTERY-ANALIZER-AI/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      }
    })
  ]
});
