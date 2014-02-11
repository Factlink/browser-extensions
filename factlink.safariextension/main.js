function initialize(i) {
  return function() {
    if(!document.head)
      setTimeout(initialize(i+1), i);
    else if (window.top === window) {
      var script = document.createElement("script");
      script.src = "https://static.factlink.com/lib/dist/factlink_loader_publishers.min.js?extension";
      //use "http://localhost:8000/lib/dist/factlink_loader_publishers.js" for local testing
      document.head.appendChild(script);
    }
  };
}

initialize(0)();
