class View {
  constructor() {
    // this.extractFormData.bind(this);
    // this.manualValidate.bind(this);
  }

  extractFormData = (form) => {
    let inputVals = {};
    [...form.elements].forEach(el => {
      if (el.tagName === 'INPUT') {
        inputVals[el.id] = el.value;
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

  bindAddContact(handler) {
    $('.container').on('click', '.add-contact', (e) => {
      this.showNewContactForm();
    });
  }

  bindSubmitContact(handler) {
    $('.container').on('submit', '.new-contact-form', (e) => {
      e.preventDefault();
      let form = e.target.closest('form');
      let inputs = this.extractFormData(form);
      handler(inputs);
    });
  }

  bindCancelButton(handler) {
    $('.container').on('click', '#cancel', (e) => {
      this.hideNewContactForm();
    });
  }

  bindEditContact(handler) {
    $('.container').on('click', '#edit', (e) => {
      let id = e.target.closest('li').dataset.id;
      console.log(`editing contact number ${id}`);
    });
  }

  bindSubmitEditedContact(handler) {
    $('.container').on('click', '#submitEdit', (e) => {
      console.log('submiting edit');
    });
  }

  bindDeleteContact(handler) {
    $('.container').on('click', '#delete', (e) => {
      let id = e.target.closest('li').dataset.id;
      handler(id);
    });
  }

  bindSearchBarInput(handler) {
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