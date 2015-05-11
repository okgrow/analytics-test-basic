Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username  : 'davey',
      email     : 'davey@example.com',
      password  : 'password',
      profile: {
        name: 'Davey Jones'
      }
    });

    Accounts.createUser({
      username  : 'william',
      email     : 'william@example.com',
      password  : 'password',
      profile: {
        name: 'William Shakespeare'
      }
    });

    Accounts.createUser({
      username  : 'admin',
      email     : 'admin@example.com',
      password  : 'password',
      isAdmin   : 'true',
      profile: {
        name: 'Admin'
      }
    });
  }
});

Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
  }
  if (options.isAdmin) {
    user.isAdmin = options.isAdmin;
  }
  return user;
});
