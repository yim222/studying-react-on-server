const proxy = require('http-proxy-middleware')
const rootUrl = 'http://localhost:8080';

module.exports = function(app) {
  // ...
  app.use(proxy('/ws/', { target:rootUrl  }))
  app.use(proxy('/wsTest/', { target:rootUrl  }))//This won't use'ful because u need to match the WS prefix. And the
  //Server is call the prefix. 

  // app.use(proxy('/api/', { target: rootUrl }))


}
