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