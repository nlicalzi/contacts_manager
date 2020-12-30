class View {
  constructor() {}

  extractFormData = (form) => {
    let inputVals = {};
    [...form.elements].forEach(el => {
      if (el.tagName === 'INPUT') {
        inputVals[el.dataset.formid] = el.value;
      };
    });
    return inputVals;
  }

  manualValidate(event) {
    event.target.checkValidity();
    return false;
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

  clearContact = (id) => {
    $(`li[data-id=${id}]`).remove()
  }

  clearAllContacts = () => {
    $(`li`).remove();
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

  showContactsList() {
    $('#contacts-container').slideDown();
  }

  hideContactsList() {
    $('#contacts-container').slideUp();
  }

  showEditContactForm() {
    $('#edit-contact-form').slideDown();
  }

  hideEditContactForm() {
    $('#edit-contact-form').slideUp();
  }

  bindAddContact() {
    $('.container').on('click', '.add-contact', (e) => {
      this.hideContactsList();
      this.showNewContactForm();
    });
  }

  bindCancelButton() {
    $('.container').on('click', '#cancelNew', (e) => {
      this.hideNewContactForm();
      this.showContactsList();

      $(".new-contact-form :input").each(function() {
        this.value = "";
      });
    });

    $('.container').on('click', '#cancelEdit', (e) => {
      this.hideEditContactForm();
      this.showContactsList();

      $(".edit-contact-form :input").each(function() {
        this.value = "";
      });
    }); 
  }

  bindSubmitContact(handler) {
    $('.container').on('submit', '.new-contact-form', (e) => {
      e.preventDefault();
      let form = e.target.closest('form');
      let contact = this.extractFormData(form);

      handler(contact);
      this.hideNewContactForm();

      $(".new-contact-form :input").each(function() {
        this.value = "";
      })
    });
  }

  bindEditContact(handler) {
    $('.container').on('click', '#edit', (e) => {
      let id = e.target.closest('li').dataset.id;
      handler(id);

      this.showEditContactForm();
      this.hideContactsList();
    });
  }

  bindSubmitEditedContact(handler) {
    $('.container').on('click', '#submitEdit', (e) => {
      e.preventDefault();
      let form = e.target.closest('form');
      let contact = this.extractFormData(form);

      contact['id'] = form.dataset.latestid;
      handler(contact);

      this.hideEditContactForm();
      this.showContactsList();
    });
  }

  bindDeleteContact(handler) {
    $('.container').on('click', '#delete', (e) => {
      let id = e.target.closest('li').dataset.id;
      handler(id);
    });
  }

  bindSearchBarInput(handler) {
    $('.container').on('keyup', '#search', (e) => {
      if (e.key.length === 1 && e.key.match(/\w|[ ]/) || e.key === 'Backspace') {
        handler(e.target.value);
      } else if (e.target.value.length === 0) {
        handler('RESET_SEARCH_FORM');
      }
    });
  }

  // TO IMPLEMENT
  // renderTags() {}
}