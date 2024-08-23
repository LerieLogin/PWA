const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt = null;
    butInstall.style.display = 'none';
  }
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  butInstall.style.display = 'none';
});
