describe('dResource', function () {
    // Load your module.
    beforeEach(angular.mock.module('dResource'));

    it('methods exists', inject(function (dResource) {
        expect(dResource).toBeDefined();
        expect(dResource).toEqual(jasmine.any(Function));

        function check(resource) {
            expect(resource).toBeDefined();
            expect(resource.decorate).toBeDefined();
            expect(resource.decorate).toEqual(jasmine.any(Function));
            expect(resource.interceptAction).toBeDefined();
            expect(resource.interceptAction).toEqual(jasmine.any(Function));
            expect(resource.transformAction).toBeDefined();
            expect(resource.transformAction).toEqual(jasmine.any(Function));
        }

        check(dResource);

        let resource = dResource.decorate();
        check(resource);

        let newResource = resource.decorate();
        check(newResource);
    }));
});
