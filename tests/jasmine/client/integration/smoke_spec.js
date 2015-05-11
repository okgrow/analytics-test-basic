describe('landing page', function () {
  beforeEach(function (done) {
    Meteor.logout( function () {
      Tracker.flush();
      done();
    });
  });

  beforeEach(waitForRouter);

  it('prompts user to sign in', function (done) {
    body = $("body").html();
    expect(body).toContain("Please sign in.");
    done();
  });
});


describe('when logged in', function () {
  beforeEach(function (done) {
    var userData = {
      email: "davey@example.com",
      password: "password",
      profile: {name: "davey"}
    };

    Accounts.createUser(userData, function () {
      Meteor.loginWithPassword("davey@example.com", "password", function () {
        Tracker.flush();
        done();
      });
    });
  });

  beforeEach(waitForRouter);

  describe('home', function () {
    it('shows Hello World!', function (done) {
      var h2 = $("body h2:eq(0)");
      expect( h2.html() ).toContain("Hello World!");
      done();
    });
  });
});
