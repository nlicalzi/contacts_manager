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
    this.renderContactsList();
  }

  async loadContactsFromServer() {
    this.model.contacts = await this.model.getAllContacts();
  }

  renderContactsList = () => {
    if (this.model.contacts.length === 0) {
      this.view.renderNoContactsCard();
    } else {
      this.model.contacts.forEach(contact => this.view.renderContact(contact))
    }
  }

  refreshContactsList = () => {
    this.view.clearAllContacts();
    this.renderContactsList();
  }

  handleSubmitAddedContact = (partialContact) => {
    this.model.createContact(partialContact);
    this.refreshContactsList();
  }

  handleDeleteContact = (id) => {
    this.model.deleteContact(id);
    this.view.clearContact(id);
  }

  handleSearchBarInput = (input) => { 
    console.log(input);
  }

  bindHandlers = () => {
    this.view.bindAddContact(this.handleAddContact);
    this.view.bindSubmitContact(this.handleSubmitAddedContact);
    this.view.bindEditContact(this.handleEditContact);
    this.view.bindSubmitEditedContact(this.handleSubmitEditedContact);
    this.view.bindDeleteContact(this.handleDeleteContact);
    this.view.bindCancelButton(this.handleCancelButton);
    this.view.bindSearchBarInput(this.debounce(this.handleSearchBarInput, 200));
  }

  debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => func.apply(null, args), delay);
    };
  };

  // TO IMPLEMENT
  // handleAddContact = (contact) => {}
  // handleEditContact = () => {}
  // handleSubmitEditedContact = () => {}
  // handleCancelButton = () => {}
}