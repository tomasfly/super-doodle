# My API App

This is a JavaScript API app with 3 endpoints: `getNews`, `getSymbol`, and `getDashboard`. It provides functionality to retrieve news, symbols, and dashboard data.

## Project Structure

```
my-api-app
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── newsController.js
│   │   ├── symbolController.js
│   │   └── dashboardController.js
│   ├── routes
│   │   ├── newsRoutes.js
│   │   ├── symbolRoutes.js
│   │   └── dashboardRoutes.js
│   └── models
├── test
│   ├── news.test.js
│   ├── symbol.test.js
│   └── dashboard.test.js
├── package.json
└── README.md
```

## Endpoints

### `getNews`

- Endpoint: `/news`
- Method: GET
- Description: Retrieves news data.
- Controller: `newsController.js`
- Route: `newsRoutes.js`

### `getSymbol`

- Endpoint: `/symbol`
- Method: GET
- Description: Retrieves symbol data.
- Controller: `symbolController.js`
- Route: `symbolRoutes.js`

### `getDashboard`

- Endpoint: `/dashboard`
- Method: GET
- Description: Retrieves dashboard data.
- Controller: `dashboardController.js`
- Route: `dashboardRoutes.js`

## Testing

Unit tests are available for each endpoint:

- `news.test.js`: Unit tests for the `getNews` endpoint.
- `symbol.test.js`: Unit tests for the `getSymbol` endpoint.
- `dashboard.test.js`: Unit tests for the `getDashboard` endpoint.

## Installation

To install the dependencies, run the following command:

```
npm install
```

## Usage

To start the API server, run the following command:

```
npm start
```

The server will be running at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.