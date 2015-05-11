Meteor.publish("self", function () {
  if (!this.userId) { this.ready(); return; }

  return Meteor.users.find({_id: this.userId});
});
