const path = require('path');
const root = path.join(__dirname, '/..');

const paths = {
    dist: path.join(root, './dist'),
    src: path.join(root, './src'),
    tmp: path.join(root, './tmp'),
    index: {
        name: 'index.js'
    }
};

paths.index.js = path.join(paths.src, paths.index.name);

const names = {
    module: 'angular-decorated-resource'
};

module.exports = {
    paths,
    names
};
