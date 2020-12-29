class View {
  constructor() {
    // this.registerEvents();
  }

  renderContact(contact) {
    $('#no-contacts-card').hide();

    let template = $('#contactsTemplate').html();
    let compiled = Handlebars.compile(template);
    $('#contacts-container').append(compiled(contact));
  }

  clearContact(id) {
    $(`li[data-id=${id}]`).remove()
  }

  renderNoContactsCard() {
    $('#contacts-container').hide();

    let emptyContactsTemplate = $('#emptyContactsTemplate').html()
    $('#no-contacts-card').append(emptyContactsTemplate);
  }

  showNewContactForm() {
    $('#contact-form-card').slideDown();
  }

  hideNewContactForm() {
    $('#contact-form-card').slideUp();
  }

  // renderEditContactForm() {

  // }

  // renderTags() {

  // }

  // renderSearchedContacts(contacts) {

  // }
}