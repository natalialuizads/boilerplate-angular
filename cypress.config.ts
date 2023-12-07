import { defineConfig } from 'cypress';

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    video: false,
    env: {
      hideCredentials: true,
      requestMode: true
    },
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
  },


});
