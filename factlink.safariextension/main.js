function initialize(i) {
  return function() {
    if(document.head) {
      if (window.top === window) {
        var script = document.createElement("script");
        script.src = "https://static.factlink.com/lib/dist/factlink_loader_publishers.js";
        document.head.appendChild(script);
      }
    }
    else setTimeout(initialize(i+1), i);
  };
}

initialize(3)();
