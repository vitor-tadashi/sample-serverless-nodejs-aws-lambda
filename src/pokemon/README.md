# Serverless Environment Variables Usage

This example demonstrates how to use environment variables for AWS Lambdas.

## Use-cases

- Provide settings as environment variables to your Lambda functions

## How it works

The first time you create or update Lambda functions that use environment variables in a region, a default service key is created for you automatically within AWS KMS. This key is used to encrypt environment variables.

When you create or update Lambda functions that use environment variables, AWS Lambda encrypts them using the AWS Key Management Service. When your Lambda function is invoked, those values are decrypted and made available to the Lambda code. Read more in the official AWS [docs](http://docs.aws.amazon.com/lambda/latest/dg/env_variables.html).

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
  GET - https://<random-code>.execute-api.us-east-1.amazonaws.com/dev/pokemon/{id}
functions:
  pokemon: serverless-aws-nodejs-dev-pokemon
```

## Usage

You can now invoke each of the Lambdas directly and print their log statements via

```bash
serverless invoke --function=pokemon --path src/pokemon/data.json --log
```

The expected result should be similar to:

```bash
{
    "statusCode": 200,
    "body": "{\"forms\":[{\"url\":\"https:\\/\\/pokeapi.co\\/api\\/v2\\/pokemon-form\\/4\\/\",\"name\":\"charmander\"}],
    .................
}
--------------------------------------------------------------------
START RequestId: 97512ec9-95fb-11e8-9000-a7936efec7bd Version: $LATEST
END RequestId: 97512ec9-95fb-11e8-9000-a7936efec7bd
REPORT RequestId: 97512ec9-95fb-11e8-9000-a7936efec7bd	Duration: 1274.39 ms	Billed Duration: 1300 ms 	Memory Size: 1024 MB	Max Memory Used: 37 MB
```

Especially helpful for local development you can also start the Lambda locally

```bash
serverless offline start
```

You can invoke this url `http://localhost:3000/pokemon/4`, the expected result should be similar to:

```bash
{
    "statusCode": 200,
    "body": "{\"forms\":[{\"url\":\"https:\\/\\/pokeapi.co\\/api\\/v2\\/pokemon-form\\/4\\/\",\"name\":\"charmander\"}]
    .................
}
```
