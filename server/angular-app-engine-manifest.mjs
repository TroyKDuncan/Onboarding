
export default {
  basePath: 'https://TroyKDuncan.github.io/onboarding-deploy',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
