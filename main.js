(() => {
  const log = text => {
    const node = document.getElementById('log');
    node.innerHTML = node.innerHTML + text + '<br/>';
  };
  const init = () => {
    navigator.bluetooth
      .requestDevice({
        filters: [
          {
            name: 'POSFAB04'
          }
        ]
        //optionalServices: ['battery_service']
      })
      .then(device => {
        log(device);
        /* ... */
      })
      .catch(error => {
        log(error);
      });
  };

  init();
})();
