module.exports = {
beforeEach:(browser ,done) =>{
    browser.maximizeWindow()
    done()
  },

  afterEach:(browser,done) =>{
    browser.end();
    done()
  }
}