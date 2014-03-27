var blacklist_regex = RegExp("^(https?://([^/]*\\.)?fct\\.li([:/].*)?|https?://localhost([:/].*)?|https?://127\\.0\\.0\\.1([:/].*)?|https?://::1([:/].*)?|https?://([^/]*\\.)?icloud\\.com([:/].*)?|https?://([^/]*\\.)?twitter\\.com([:/].*)?|https?://([^/]*\\.)?gmail\\.com([:/].*)?|https?://([^/]*\\.)?irccloud\\.com([:/].*)?|https?://([^/]*\\.)?flowdock\\.com([:/].*)?|https?://([^/]*\\.)?yammer\\.com([:/].*)?|https?://([^/]*\\.)?moneybird\\.nl([:/].*)?|https?://([^/]*\\.)?newrelic\\.com([:/].*)?|https?://([^/]*\\.)?mixpanel\\.com([:/].*)?|https?://([^/]*\\.)?facebook\\.com([:/].*)?|https?://([^/]*\\.)?mail\\.google\\.com([:/].*)?|https?://([^/]*\\.)?dropbox\\.com([:/].*)?|https?://([^/]*\\.)?kiprecepten\\.nl([:/].*)?|https?://([^/]*\\.)?grooveshark\\.com([:/].*)?|https?://([^/]*\\.)?insiteproject\\.com([:/].*)?|https?://([^/]*\\.)?fd\\.nl([:/].*)?|about:.*|https?://([^/]*\\.)?github\\.com([:/].*)?|https?://([^/]*\\.)?hackerone\\.com([:/].*)?)$");

function initialize(i) {
  return function() {
    if(!document.head)
      setTimeout(initialize(i+1), i);
    else if (window.top === window) {
      document.documentElement.setAttribute('data-factlink-extension-loaded', '');
      var script = document.createElement("script");
      script.src = "https://static.factlink.com/lib/dist/factlink_loader.min.js?o=extension";
      //use "http://localhost:8000/lib/dist/factlink_loader.js" for local testing
      document.head.appendChild(script);
    }
  };
}

if(!blacklist_regex.test(window.location.href))
  initialize(0)();
