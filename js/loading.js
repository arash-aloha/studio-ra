const loading = () => {
  window.onload = function () {
    console.log("loader is running");
    document.getElementById("loading").style.display = "none";
    console.log("loaded is done");
  };
};
loading()
