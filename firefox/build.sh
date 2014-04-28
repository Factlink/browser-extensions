#!/bin/bash

#https://factlink.github.io/browser-extensions/firefox/updates.rdf
#https://factlink.github.io/browser-extensions/firefox/factlink-#{self[:version]}.xpi"

cfx xpi --force-mobile --update-link https://factlink.github.io/browser-extensions/firefox/factlink-latest.xpi --update-url https://factlink.github.io/browser-extensions/firefox/updates.rdf
