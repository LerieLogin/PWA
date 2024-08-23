const butInstall = document.getElementById('buttonInstall');
<<<<<<< HEAD
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
=======

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
>>>>>>> 79f3e56d1233ca5665868c6c2831da93c2f9d8bb
