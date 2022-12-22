const loadingbody = document.getElementById("light");
    setTimeout(loading, 3000);
    function loading() {
      loadingbody.style.overflow = "visible";
    }

    function displayOut() {
      var x = document.getElementById("loading");

      setTimeout(function () {
        x.style.opacity = "0";
      }, 3000);
    }
    displayOut();

    setTimeout(loader, 3500);
    function loader() {
      const loader = document.getElementById("loading");
      loader.remove();
    }