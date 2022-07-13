import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-stencil-components',
  hydratedFlag: {
    selector: "attribute"
  },
  invisiblePrehydration: false,
  globalStyle: "src/styles/global.css",
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'dist-custom-elements', autoDefineCustomElements: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
