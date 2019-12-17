import {Config} from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
    specs: ['FirstTest.js']
};