const utilsMod = angular.module('dResource.utils', []);

import resourceExtend from './resourceExtend';
resourceExtend(utilsMod);

const mod = angular.module('dResource', [
    'ngResource',
    'dResource.utils'
]);


import dResource from './dResource';
dResource(mod);

module.exports = mod.name;
