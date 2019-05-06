# Response helpers for AWS Lambda (nodejs)

Helper functions to create response objects for AWS Lambda

![](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMy9BVFlIWDZYV1NqUzNNQnY0aTdWdExYTVpqaGNpcS80Tm9XS2QvRXFieWxnYVFUMzFMSElBSXlQNDdWcW1JWXQxUkp5QjFGUmZUQkJqK29ENmMvNFNVPSIsIml2UGFyYW1ldGVyU3BlYyI6IkJQb1lYWUJGVlBISTM5aEkiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Usage

```javascript
'use strict';

const {createJsonResponse} = require('lambda-nodejs-response-helper');

module.exports.hello = async (event) => {
  return createJsonResponse(
    200,
    {
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    },
    {
      'X-Custom-Header': 'Foobar'
    }
  );
};
```
