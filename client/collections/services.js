/*
 * Add query methods like this:
 *  Services.findPublic = function () {
 *    return Services.find({is_public: true});
 *  }
 */
 Meteor.subscribe('services');