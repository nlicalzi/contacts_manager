class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.loadInitialState();
    this.view.showContainer();
    // register handlers and bind methods
    // this.bindAllMethods();
    this.bindHandlers();
  }

  async loadInitialState() {
    await this.loadContactsFromServer();
    await this.renderContactsList();
  }

  async loadContactsFromServer() {
    this.model.contacts = await this.model.getAllContacts();
  }

  async renderContactsList() {
    if (this.model.contacts.length === 0) {
      this.view.renderNoContactsCard();
    } else {
      this.model.contacts.forEach(contact => this.view.renderContact(contact))
    }
  }

  // addNewContact() {
  //   // on form submit...
  //   let inputs = document.querySelectorAll('form input');
  //   [...inputs].map(input => input.value);
  //   // do something with the value of the above
  // }

  handleAddContact(contact) {}
  handleSubmitAddedContact() {}
  handleEditContact() {}
  handleSubmitEditedContact() {}
  handleDeleteContact() {}
  handleCancelButton() {}
  handleSearchBarInput() {}

  bindHandlers() {
    // button events
    this.view.bindAddContact(this.handleAddContact);
    this.view.bindSubmitContact(this.handleSubmitAddedContact);
    this.view.bindEditContact(this.handleEditContact);
    this.view.bindSubmitEditedContact(this.handleSubmitEditedContact);
    this.view.bindDeleteContact(this.handleDeleteContact);
    this.view.bindCancelButton(this.handleCancelButton);
    this.view.bindSearchBarInput(this.handleSearchBarInput);
    
    // search bar events
    
  }

  // bindAllMethods() {
    // this.view.renderContact.bind(this);
    // this.view.clearContact.bind(this);
    // this.view.showNewContactForm.bind(this);
    // this.view.hideNewContactForm.bind(this);
  // }
}