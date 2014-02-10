Firefox extension
---

Building the firefox extension requires the Firefox [Addon SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).
The easiest way to install this is by cloning [git@github.com:mozilla/addon-sdk.git](https://github.com/mozilla/addon-sdk)
and running `source bin/activate` in the repo which installs the appropriate environment variables in that shell.
Some handy commands to get you started: `cfx run` in the firefox extension directory will run a profile-less firefox
process with the extension installed, and `cfx xpi` will compile the XPI.


Chrome extension
---

For now the chrome extension does not support injection on install. Here is an (incomplete) tutorial for how we can do that, reusing the data in the manifest: http://stackoverflow.com/a/11598753
