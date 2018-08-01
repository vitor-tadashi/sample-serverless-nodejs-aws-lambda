<p align="center">
  <a href="https://serverless.com/">
    <img
      alt="Hello Serverless World"
      src="/images/serverless-framework.png"
    />
  </a>
</p>

## Serverless and AWS Lambda 
Samples serverless functions using Node, Serverless framework and AWS Lambda

1. **Install via npm:**
  ```bash
  npm install -g serverless
  ```

2. **Set-up your [Provider Credentials](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md)**. [Watch the video on setting up credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)

> If you want to create a new serverless project you can use serverless-cli
3. **Create a Service:**

  You can create a new service
  ```bash
  # Create a new Serverless Service/Project
  serverless create --template aws-nodejs --path sample-serverless-nodejs-aws-lambda
  # Change into the newly created directory
  cd sample-serverless-nodejs-aws-lambda
  ```
  if you're already in the folder you can just to this
  
  ```bash
    # Create a new Serverless Service/Project
    serverless create --template aws-nodejs
    # Change into the newly created directory
    cd sample-serverless-nodejs-aws-lambda
  ```

4. **Deploy a Service:**

  Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.
  ```bash
  serverless deploy -v
  ```
  
## Quick start
Install the sample project
```bash
npm install
```

>If you're already set up your AWS you can execute this command
```bash
serverless deploy
```

>It's done, but if you want to execute locally you can just
```bash
serverless offline start
```
Here is the full documentation of [serverless-offline](https://github.com/dherault/serverless-offline)

### Serverless functions documentation
| Function                                                                                                          | Description                                                                                                         |
|------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [hello-world](https://github.com/vitor-tadashi/sample-serverless-nodejs-aws-lambda/tree/master/src/hello-world)   | A simple Serverless Hello World function.                                                                           |
| [pokemon](https://github.com/vitor-tadashi/sample-serverless-nodejs-aws-lambda/tree/master/src/pokemon)           | A Serverless function to demonstrate how to use environment variables for AWS Lambda and get the URL path parameter |
| [hello-world-with-jwt](https://github.com/vitor-tadashi/sample-serverless-nodejs-aws-lambda/tree/master/src/auth) | A Serverless Hello World function with authentication using [JWT](https://jwt.io/)                                  |
