# Introduction

The repository contains a sample demo application created using [HapiJs](https://hapi.dev/) and [NodeJs](https://nodejs.org/en/). Note: this is a boiler plate code for educational purposes not to be used out of the box for production deployments

## Features

- HapiJs for creating http server and apis, leverages different HapiJs features like plugins, routing etc.
- Tests using facebook's jest library
- View a detailed list of APIS and schemas by going to `/swagger` - Todo

## Setup

Please install Node JS v12 or higher and run the following commands:

## Local Development

```sh
# populate values in .env file, use .env.template file for reference
cp ./.env.template ./.env

npm install

# This app uses nodemon to automatically restart nodejs server on file changes. Install it globally on your machine.
npm install -g nodemon

# To run the application on your local system
npm run start

# To run the test cases
npm run test
```
