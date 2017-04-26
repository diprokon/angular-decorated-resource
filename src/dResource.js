import {each} from './utils';

export default function (mod) {
    function factory(resourceExtend, $resource) {
        'ngInject';
        let defaultActions = {
            get: {method: 'GET'},
            save: {method: 'POST'},
            update: {method: 'PUT'},
            query: {method: 'GET', isArray: true},
            remove: {method: 'DELETE'},
            delete: {method: 'DELETE'}
        };

        function dResource(url, paramDefaults, actions, options) {
            let resource,
                params;

            actions = angular.merge({}, defaultActions, actions);

            params = [url, paramDefaults, actions, options];
            this.paramsDecorators.forEach(dec => params = dec(params));
            [url, paramDefaults, actions, options] = params;

            each(
                actions,
                (action, key) => this.decorators.forEach(
                    dec => dec(action, key)
                )
            );

            resource = $resource(url, paramDefaults, actions, options);

            each(this.resourceMethods, (method, key) => resource[key] = method.bind(resource));

            return resource;
        }

        resourceExtend(dResource, {
            resource: dResource,
            decorators: [],
            resourceMethods: [],
            paramsDecorators: []
        });

        return dResource.decorate();
    }

    mod.factory('dResource', factory);
}
