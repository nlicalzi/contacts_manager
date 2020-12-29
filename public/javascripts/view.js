class View {
  static renderContact(contact) {
    $('#no-contacts-card').hide();

    let template = $('#contactsTemplate').html();
    let compiled = Handlebars.compile(template);
    $('#contacts-container').append(compiled(contact));
  }

  static clearContact(id) {
    $(`li[data-id=${id}]`).remove()
  }

  static renderNoContactsCard() {
    $('#contacts-container').hide();

    let emptyContactsTemplate = $('#emptyContactsTemplate').html()
    $('#no-contacts-card').append(emptyContactsTemplate);
  }

  // static renderSearchedContacts(contacts) {}
  static renderNewContactForm() {}
  static renderEditContactForm() {}
  static showNewContactForm() {
    // jQuery slide-down
  }
  static hideNewContactForm() {
    // jQuery slide-up
  }
  static renderTags() {}
}