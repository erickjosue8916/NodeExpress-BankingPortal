const path = require('path');

describe('View engine and directory', () => {
  it('should set view engine and directory @app-set-views-directory-engine', () => {
    assert(typeof router === 'function', '`app` const has not been created in `app.js`.');
    assert(router.settings.views === path.join(__dirname, '../../src/views'), 'The view directory has not been set to the `views` directory.');
    assert(router.settings['view engine'] === 'ejs', 'The view engine has not been set to `ejs`.');
  });
});
