// Houston isn't defined in the Velocity mirror app for some reason,
// check for it to avoid errors
if (typeof Houston !== 'undefined') {
  Houston.add_collection(Meteor.users);
  Houston.add_collection(Houston._admins);
}
