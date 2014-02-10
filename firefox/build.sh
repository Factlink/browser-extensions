#/bin/bash

#https://static.factlink.com/extension/firefox/updates.rdf
#https://static.factlink.com/extension/firefox/factlink-#{self[:version]}.xpi"

cfx xpi  --update-link https://static.factlink.com/extension/firefox/factlink-extension.xpi --update-url https://static.factlink.com/extension/firefox/updates.rdf
