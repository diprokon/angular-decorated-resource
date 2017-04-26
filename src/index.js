const utils = angular.module('dResource.utils', []);

require('./resourceExtend')(utils);

const mod = angular.module('dResource', [
    'ngResource',
    'dResource.utils'
]);

require('./dResource')(mod);

module.exports = mod.name;
