import 'angular';
import 'angular-mocks';
import 'angular-resource';

import '../src/index';

const context = require.context('./', true, /\.spec\.js$/);

context.keys().forEach(context);
