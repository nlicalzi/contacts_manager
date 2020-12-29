class View {
  constructor() {
    // this.bindAllMethods();
    // this.registerEvents();
  }

  showContainer() {
    $('.container').slideDown();
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

  bindAddContact(handler) {
    $('.container').on('click', '.add-contact', (e) => {
      console.log('adding');
    });
  }

  bindSubmitContact() {
    $('.container').on('click', '#submit', (e) => {
      console.log('submitting');
    });
  }

  bindEditContact() {
    $('.container').on('click', '#edit', (e) => {
      console.log('editing');
    });
  }

  bindSubmitEditedContact() {

  }

  bindDeleteContact() {
    $('.container').on('click', '#delete', (e) => {
      console.log('deleting');
    });
  }

  bindCancelButton() {
    $('.container').on('click', '#cancel', (e) => {
      console.log('canceling');
    });
  }

  bindSearchBarInput() {
    $('.container').on('change', '#search', (e) => {
      console.log('searching');
    });
  }

  // renderEditContactForm() {

  // }

  // renderTags() {

  // }

  // renderSearchedContacts(contacts) {

  // }
}