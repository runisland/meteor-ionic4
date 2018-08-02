export async function isAppModeMd() {
  const app = document.querySelector('ion-app');
  if (app) {
    await app.componentOnReady();
    return app.classList.contains('app-md');
  }
  return true;
}

export async function getAppMode() {
  const isMd = await isAppModeMd();

  return isMd ? 'md' : 'ios';
}

export async function getAppOtherMode() {
  const isMd = await isAppModeMd();

  return isMd ? 'ios' : 'md';
}
