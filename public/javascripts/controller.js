class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.bindHandlers();
    this.loadInitialState();
    this.view.showContainer();
  }

  async loadInitialState() {
    await this.loadContactsFromServer();
    this.refreshContactsList();
  }

  async loadContactsFromServer() {
    this.model.contacts = await this.model.getAllContacts();
  }

  renderContactsList = (contacts) => {
    if (this.model.contacts.length === 0) {
      this.view.renderNoContactsCard();
    } else {
      contacts.forEach(contact => this.view.renderContact(contact))
    }
  }

  refreshContactsList = (contacts = this.model.contacts) => {
    this.view.clearAllContacts();
    this.renderContactsList(contacts);
    this.view.showContactsList();
  }

  handleSubmitAddedContact = (partialContact) => {
    this.model.createContact(partialContact);
    this.refreshContactsList();
  }

  handleDeleteContact = (id) => {
    this.model.deleteContact(id);
    this.view.clearContact(id);
  }

  handleEditContact = (id) => {
    $('.edit-contact-form')[0].setAttribute('data-latestid', id);

    let contact = this.model.contacts.filter(contact => contact.id === Number(id))[0];
    let { full_name, email, phone_number } = contact;

    $('#editContactFullName').val(full_name);
    $('#editContactEmail').val(email);
    $('#editContactPhoneNumber').val(phone_number);
  }

  handleSubmitEditedContact = (contact) => {
    this.model.updateContact(contact);
    this.refreshContactsList();
  }

  handleSearchBarInput = (input) => { 
    let matches = this.model.contacts.filter(
      contact => contact['full_name'].toLowerCase().match(input)
    );

    if (input === 'RESET_SEARCH_FORM') {
      this.refreshContactsList()
    } else {
      this.refreshContactsList(matches);
    }
  }

  bindHandlers = () => {
    this.view.bindAddContact();
    this.view.bindCancelButton();
    this.view.bindSubmitContact(this.handleSubmitAddedContact);
    this.view.bindEditContact(this.handleEditContact);
    this.view.bindSubmitEditedContact(this.handleSubmitEditedContact);
    this.view.bindDeleteContact(this.handleDeleteContact);
    this.view.bindSearchBarInput(this.debounce(this.handleSearchBarInput, 250));
  }

  debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => func.apply(null, args), delay);
    };
  };
}