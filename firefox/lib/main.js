var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /https?:.*/,
  contentScriptFile: data.url("inject-factlink.js"),
  contentScriptWhen: "start",
  attachTo: ["existing", "top"] //must specify "top" to ensure factlink isn't injected in its own iframe.
});
