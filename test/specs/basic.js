const assert = require('assert')

browser.addCommand('getUrlAndTitle', function (customVar) {
    // `this` refers to the `browser` scope
    return {
        url: this.getUrl(),
        title: this.getTitle(),
        customVar: customVar
    }
})

it('should use my custom command', () => {
    browser.url('http://www.github.com')
    const result = browser.getUrlAndTitle('foobar')

    assert.strictEqual(result.url, 'https://github.com/')
    assert.strictEqual(result.title, "The world’s leading software development platform · GitHub")
    assert.strictEqual(result.customVar, 'foobar')
})


//import { multiremote } from 'webdriverio'


// describe('webdriver.io page', () => {
//     it('should have the right title', async () => {
//         await browser.url('https://webdriver.io')
//         const title = await browser.getTitle()
//         assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
//     })
// })


