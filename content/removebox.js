(function () {

  function loop() {
    setTimeout(() => {
      const element = document.querySelector('[data-testid="DMDrawer"]');
      if (element) {
        element.remove();
      } else {
        setTimeout(loop, 100);
      }
    }, 100);
  }

  loop();

}());
