
/*
 * gulp-supervisor
 * https://github.com/leny/gulp-supervisor
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var kindOf, kindsOf, supervisor;

supervisor = require("supervisor");

kindsOf = {};

"Number String Boolean Function RegExp Array Date Error".split(" ").forEach(function(k) {
  return kindsOf["[object " + k + "]"] = k.toLowerCase();
});

kindOf = function(value) {
  if (value == null) {
    return String(value);
  }
  return kindsOf[kindsOf.toString.call(value)] || "object";
};

module.exports = function(oOptions) {
  var aOptions;
  aOptions = [];
  if (kindOf(oOptions.watch) === "array") {
    aOptions.push("--watch", oOptions.watch.join(","));
  }
  if (kindOf(oOptions.ignore) === "array") {
    aOptions.push("--ignore", oOptions.ignore.join(","));
  }
  if (kindOf(oOptions.extensions) === "array") {
    aOptions.push("--extensions", oOptions.extensions.join(","));
  }
  if (kindOf(oOptions.exec) === "string") {
    aOptions.push("--exec", oOptions.exec);
  }
  if (kindOf(oOptions.pollInterval) === "number") {
    aOptions.push("--poll-interval", "" + oOptions.pollInterval);
  }
  if (kindOf(oOptions.noRestartOn) === "string" && (oOptions.noRestartOn === "error" && oOptions.noRestartOn === "exit")) {
    aOptions.push("--no-restart-on", oOptions.noRestartOn);
  }
  if (oOptions.debug === true) {
    aOptions.push("--debug");
  }
  if (oOptions.debugBrk === true) {
    aOptions.push("--debug-brk");
  }
  if (oOptions.harmony === true) {
    aOptions.push("--harmony");
  }
  if (oOptions.forceWatch === true) {
    aOptions.push("--force-watch");
  }
  if (oOptions.quiet === true) {
    aOptions.push("--quiet");
  }
  aOptions.push("--", oOptions.script);
  if (kindOf(oOptions.args) === "array") {
    aOptions.push.apply(aOptions, oOptions.args);
  }
  return supervisor.run(aOptions);
};
