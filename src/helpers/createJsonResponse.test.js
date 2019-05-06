'use strict';

const createJsonResponse = require('./createJsonResponse');

describe('Create JSON response', function () {
    it('Can create a response object with object body', async () => {
        // Call test subject
        const response = createJsonResponse(200, {foo: 'bar'});

        // Assertions
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual('{"foo":"bar"}');
        expect(response.headers).toEqual({'Accept': 'application/json'});
    });

    it('Can create a response object without body', async () => {
        // Call test subject
        const response = createJsonResponse(201);

        // Assertions
        expect(response.statusCode).toEqual(201);
        expect(response.body).toBeUndefined();
        expect(response.headers).toEqual({'Accept': 'application/json'});
    });

    it('Can create a response object with headers', async () => {
        // Call test subject
        const response = createJsonResponse(
            200,
            {},
            {'X-Foo': 'Bar'}
        );

        // Assertions
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("{}");
        expect(response.headers).toEqual({
            'Accept': 'application/json',
            'X-Foo': 'Bar'
        });
    });

    it("Can doesn't overwrite the accept response header when explicitly provided", async () => {
        // Call test subject
        const response = createJsonResponse(
            200,
            {},
            {
                'Accept': 'application/custom',
                'X-Foo': 'Bar',
            }
        );

        // Assertions
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("{}");
        expect(response.headers).toEqual({
            'Accept': 'application/custom',
            'X-Foo': 'Bar'
        });
    });
});
