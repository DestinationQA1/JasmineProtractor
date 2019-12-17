import {browser, element, by, By} from 'protractor';
describe('My Test Suite', function() {
	
	it('first test case', function() {
		console.log('executing first test');
		browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Julie');
        let greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
		
	});
});