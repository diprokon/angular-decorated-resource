describe('resourceExtend', function () {
    // Load your module.
    beforeEach(angular.mock.module('dResource.utils'));

    it('methods exists', inject(function (resourceExtend) {
        expect(resourceExtend).toBeDefined();
        expect(resourceExtend).toEqual(jasmine.any(Function));

        function check(resource) {
            expect(resource).toBeDefined();
            expect(resource.decorate).toBeDefined();
            expect(resource.decorate).toEqual(jasmine.any(Function));
            expect(resource.interceptAction).toBeDefined();
            expect(resource.interceptAction).toEqual(jasmine.any(Function));
            expect(resource.transformAction).toBeDefined();
            expect(resource.transformAction).toEqual(jasmine.any(Function));
        }

        let context = {},
            resource = function () {
            };

        resourceExtend(resource, context);

        check(resource);
    }));
});
