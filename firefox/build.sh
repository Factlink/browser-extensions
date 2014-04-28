#!/bin/bash

#https://factlink.github.io/browser-extensions/files/firefox/updates.rdf
#https://factlink.github.io/browser-extensions/files/firefox/factlink-#{self[:version]}.xpi"

cfx xpi --force-mobile --update-link https://factlink.github.io/browser-extensions/files/firefox/factlink-latest.xpi --update-url https://factlink.github.io/browser-extensions/files/firefox/updates.rdf
