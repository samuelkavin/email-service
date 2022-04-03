<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Simple email service for Pickle Auction with Nestjs and Nodemailer

## Prerequisites
- node >= 14.17.5
- npm >= 6.14.14

## Installation

```bash
$ git clone https://github.com/samuelkavin/email-service.git <folder-name>
$ cd <folder-name>
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Architecture

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.postimg.cc/sXXcwTTK/Screenshot-2022-04-03-at-11-20-23-PM.png" width="100%" alt="Nest Logo" /></a>
</p>


###### Folder Structure
```
src
└── modules
│ └─── email 						   // nodemailer & email service configurations 
│ └─── user							 // user registration api 
├── main.ts							   // app, cors & swagger config
│.eslintrc.js
│tsconfig.json
│package.json
│.prettierrc

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
