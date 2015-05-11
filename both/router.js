Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('self');
  },
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

if (Meteor.isClient) {
  Router.onAfterAction(scrollToTop);
}

// var mustBeSignedIn = function (pause) {
//   if (this.ready() && !Meteor.user()) {
//     this.render('mustBeSignedIn');
//   } else {
//     this.next();
//   }
// };
// 
var mustBeAdmin = function () {
  if (! this.ready() ) {
    return;
  } else {
    if (Meteor.user() && Meteor.user().isAdmin === 'true') {
      console.log(">>>>>> I'm an admin");
      this.next();
    } else {
      this.render('notFound');
    }
  }
};

Router.onBeforeAction('loading');
/* Router.onBeforeAction(mustBeSignedIn); */

Router.route('/', {
  name: 'home'
});

Router.route('/private', {
  name: 'private'
});

Router.route('/code-word-clearance', {
  name: 'codeWordClearance'
});

Router.route('/top-secret', {
  name: 'topSecret'
});

Router.route('/admin-home', {
  name: 'adminHome',
  onBeforeAction: mustBeAdmin,
});


Router.route('/profile/:_id', {
  name: 'userProfile',
  data: function () {
    return Meteor.users.findOne({_id: this.params._id});
  },
  waitOn: function() {
    return Meteor.subscribe('singleUserImage', this.params._id);
  }
})

Router.plugin('ensureSignedIn', {
  only: ['userProfile', 'topSecret']
});
