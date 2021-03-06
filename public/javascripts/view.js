class View {
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

  revealContainer() {
    $('.container').slideDown();
  }

  renderContact(contact) {
    $('#no-contacts-card').hide();
    if (contact['tags'] && typeof contact['tags'] === 'string') {
      contact['tags'] = contact['tags'].split(',');
    }

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

  showNoContactsCard() {
    $('#no-contacts-card').slideDown();
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

  hideNoContactCard() {
    $('#no-contacts-card').slideUp();
  }

  bindAddContact() {
    $('.container').on('click', '.add-contact', (e) => {
      this.hideContactsList();
      this.hideNoContactCard()
      this.hideEditContactForm();
      this.showNewContactForm();
    });
  }

  bindCancelButton(handler) {
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
    handler();
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
    $('.container').on('submit', '.edit-contact-form', (e) => {
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

  bindTagClick(handler) {
    $('.container').on('click', 'a', (e) => {
      e.preventDefault();
      let tag = e.target.text;
      handler(tag);

      $('.clear-tag-filtering').show();
    });
  }

  bindClearTagClick(handler) {
    $('.clear-tag-filtering').on('click', (e) => {
      $('.clear-tag-filtering').hide();
      handler();
    });
  }
}