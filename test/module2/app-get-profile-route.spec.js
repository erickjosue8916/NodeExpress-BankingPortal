const R = require('ramda');

describe('app.js contains a Profile Route', () => {
  let spy;
  before(() => {
    if (typeof router === 'undefined') {
      spy = {
        restore: () => { }
      };
    } else {
      spy = sinon.spy(router, 'render');
    }
  });

  it('should contain the profile route @app-get-profile-route', done => {
    assert(typeof router === 'function', '`app` const has not been created in `app.js`.');
    request(router)
      .get('/profile')
      .expect(() => {
        assert(spy.called, 'The profile route may have not been created.');
        assert(
          spy.firstCall.args[0] === 'profile',
          'The profile route does not seem to be rendering the `profile` view.'
        );
        assert(
          R.propEq('name', 'PS User')(spy.firstCall.args[1].user),
          'The profile route may be missing a user object.'
        );
      })
      .end(done);
  });

  after(() => {
    spy.restore();
  });
});
