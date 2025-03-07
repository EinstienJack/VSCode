function fn() {   
    var config = { // base config JSON
      baseUrl: 'http://localhost:8080',
      someVariable: 'someValue'
    };
  
    // you can also use karate.env to get the current environment
    var env = karate.env; // get java system property 'karate.env'
    karate.log('karate.env system property was:', env);
  
    if (env == 'dev') {
      // customize
      config.baseUrl = 'http://dev.example.com';
    } else if (env == 'qa') {
      // customize
      config.baseUrl = 'http://qa.example.com';
    }
  
    // don't forget to return the config object
    return config;
  }