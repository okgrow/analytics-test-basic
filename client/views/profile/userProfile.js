Template.userProfile.helpers({
  // for show
  imageUrl: function () {
    var image = UserImages.findOne({associatedObjectId: this._id});
    return image ? image.url({store: 'userImages-normal'}) : "/images/profile/default.png";
  },

  // for edit
  uploadImageConfig: function () {
    return {
      imageCollection: UserImages,
      store: 'userImages-thumbnail',
      associatedObject: this,
    };
  }

});
