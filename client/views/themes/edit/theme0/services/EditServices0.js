/*****************************************************************************/
/* ServicesIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditServices0.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};