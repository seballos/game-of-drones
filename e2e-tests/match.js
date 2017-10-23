module.exports = {
  'Start a match': function (browser) {
    browser
      .url('http://dev.gameofdrones.com:3030')
      .waitForElementVisible('body', 1000)
      .setValue('input#p1-textfield', 'foo')
      .setValue('input#p2-textfield', 'bar')
      .click('button')
      .pause(1000)
      .assert.containsText('h2', 'Round 1')
      .end();
  }
};
