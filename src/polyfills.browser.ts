// import 'ie-shim'; // Internet Explorer 9 support

import 'core-js/es6';

// import 'core-js/es7/reflect';
import 'reflect-metadata';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill
// import 'ts-helpers';

if ('production' === process.env.ENV) {
  // Production


} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
