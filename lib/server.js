newrelic = Npm.require('newrelic');

var patchFibers = Npm.require('cls-fibers'),
  ns = process.namespaces && process.namespaces['__NR_tracer'];
if (ns) {
  patchFibers(ns);
}
