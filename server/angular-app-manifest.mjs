
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://TroyKDuncan.github.io/onboarding-deploy/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 26949, hash: '30b4beb77d2ff909426e3ac0755c46c42bafca3a10cbaa744b592853b6d7c435', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17203, hash: 'e59fd5751df4eb849e7f6c6007f83a8c92719a51a9888c6ac91f29184c6d7bb4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EWJS6PIS.css': {size: 22876, hash: 'm9FwwScwv5g', text: () => import('./assets-chunks/styles-EWJS6PIS_css.mjs').then(m => m.default)}
  },
};
