signedIn = function(userId, doc) {
  return !! userId;
}

ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

isAdmin = function (userId, doc) {
  var user = Meteor.users.findOne({_id: userId});
  return ( user.isAdmin === 'true' )
}
