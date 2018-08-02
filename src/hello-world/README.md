# Serverless Hello World

This example demonstrates how to create a simple function for AWS Lambda.

## Setup

None needed.

## Deploy

In order to deploy the you endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Creating Stack…
Serverless: Checking Stack create progress…
.....
Serverless: Stack create finished…
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
................
Serverless: Stack update finished...
Service Information
service: serverless-aws-nodejs
stage: dev
region: us-east-1
stack: serverless-aws-nodejs-dev
api keys:
  None
endpoints:
  GET - https://<random-code>.execute-api.us-east-1.amazonaws.com/dev/hello
functions:
  hello-world: serverless-aws-nodejs-dev-hello-world
...............
```

## Usage

You can now invoke each of the Lambdas directly and print their log statements via

```bash
serverless invoke --function=hello-world --log
```

The expected result should be similar to:

```bash
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless! Hello World!\"}"
}
```

Especially helpful for local development you can also start the Lambda locally

```bash
serverless offline start
```

You can invoke this url `http://localhost:3000/hello`, the expected result should be similar to:

```bash
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless! Hello World!\"}"
}
```
