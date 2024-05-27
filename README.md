## Installation

```bash
$ npm install
```

## Environment Variables

This application uses different sets of environment variables for different environments. These are defined in `.env.local` and `.env.dev` files.

- `.env.local`: This file is used for local development. The variables defined in this file will only be loaded when the application is running on your local machine.

- `.env.dev`: This file is used for the development environment. The variables defined in this file will be loaded when the application is running in the development environment.

To set up your environment variables for each environment:

1. Create a new file in the root directory of the project named `.env.local` or `.env.dev` depending on the environment.
2. Open the corresponding `.env.example` file in the project.
3. Copy the contents of the `.env.example` file into the `.env.local` or `.env.dev` file.
4. Replace the placeholder values in the `.env.local` or `.env.dev` file with your actual values.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## API Endpoints

### Product

- `GET /product`: Fetch all products.
- `POST /product`: Create a new product. Requires a JSON body with product details.

### Order

- `GET /order`: Fetch all orders.
- `POST /order`: Create a new order. Requires a JSON body with order details.
