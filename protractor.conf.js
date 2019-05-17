// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.spec.ts'

  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://tr-qa/account/login',
  
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }

  },
  onPrepare() {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().pageLoadTimeout(10000);  // 10 seconds
    browser.manage().window().maximize();
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));





  }


};
