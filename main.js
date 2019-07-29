(() => {
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
        console.log(device);
        /* ... */
      })
      .catch(error => {
        console.log(error);
      });
  };

  init();
})();
