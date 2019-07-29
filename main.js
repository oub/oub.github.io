(() => {
  const log = text => {
    const node = document.getElementById('log');
    node.innerHTML = `${node.innerHTML}<li>${text}</li>`;
  };
  const startBlueTooth = () => {
    log('starting...');
    let options = {};
    //options.acceptAllDevices = true;
    options.filters = [
      {
        name: 'POSFAB04'
      }
    ];
    //optionalServices: ['battery_service']

    navigator.bluetooth
      .requestDevice(options)
      .then(device => {
        log(`^-^ ${device}`);
        /* ... */
      })
      .catch(error => {
        log(`${error}`);
      });
  };
  const init = () => {
    log('init...');
    document.getElementById('starter').onclick = startBlueTooth;
  };

  init();
})();
