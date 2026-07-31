if ('serviceWorker' in navigator) {
  let refreshing = false;

  // Detect when the service worker changes (e.g. new version activated) and reload
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      window.location.reload();
      refreshing = true;
    }
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('ServiceWorker registered with scope:', reg.scope);
        
        // Force check for updates on startup
        reg.update();
      })
      .catch((err) => console.error('ServiceWorker registration failed:', err));
  });
}
