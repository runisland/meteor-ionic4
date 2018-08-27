export async function getAppMode() {
  const app = document.querySelector('ion-app');
  const html = document.querySelector('html');
  if (app && html) {
    await app.componentOnReady();
    return html.getAttribute('mode');
  }
  return 'md'; // Default value.
}

export async function isAppModeMd() {
  const appMode = await getAppMode();

  return appMode === 'md';
}

export async function getAppOtherMode() {
  const isMd = await isAppModeMd();

  return isMd ? 'ios' : 'md';
}
