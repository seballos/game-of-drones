# [Game Of Drones](https://github.com/seballos/game-of-drones)

An extremely addictive game of using react, react-router, webpack in development

## Tools

* **React@16**
* **Redux**
* **Babel**
* **Webpack**
* **Ava**
* **Aphodite styles**
* **Yarn**
* **Nightwatch**
* **JSON Server**

## Hosts file
Add the following line in your hosts file
* 127.0.0.1 dev.gameofdrones.com

## Run Dev

* Webpack dev server with hot reloading, no server rendering, and also run
  json-server for FAKE rest service and storage.

* Make sure the db.json file exists, otherwise the json-server will fail.
```
yarn dev
```

## Testing

* Using Enzyme, Ava, and browser-env

```
yarn test
```

### E2E Test

* Download chrome driver from [here](https://chromedriver.storage.googleapis.com/index.html?path=2.33/)
* Make sure the application is running with `yarn dev`
* `yarn e2e`

