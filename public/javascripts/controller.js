class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // set initial page state
    this.loadInitialState();

    // register handlers and bind methods
    this.bindAllMethods();
    // this.bindHandlers();
  }

  async loadInitialState() {
    await this.loadContactsFromServer();
    await this.populateContacts();
  }

  async loadContactsFromServer() {
    this.model.contacts = await this.model.getAllContacts();
  }

  async populateContacts() {
    if (this.model.contacts.length === 0) {
      this.view.renderNoContactsCard();
    } else {
      this.model.contacts.forEach(contact => this.view.renderContact(contact))
    }
  }

  addNewContact() {
    // on form submit...
    let inputs = document.querySelectorAll('form input');
    [...inputs].map(input => input.value);
    // do something with the value of the above
  }

  // bindHandlers() {
  //   // button events
  //   this.handleAddContactButtonClick = this.handleAddContactButtonClick.bind(this);
  //   this.handleSubmitNewContactButtonClick  = this.handleSubmitNewContactButtonClick.bind(this);
  //   this.handleEditContactButtonClick = this.handleEditContactButtonClick.bind(this);
  //   this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  //   this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
  //   // search bar events
  //   this.handleSearchBarInput = this.handleSearchBarInput.bind(this);
  // }

  bindAllMethods() {
    this.view.renderContact.bind(this);
    this.view.clearContact.bind(this);
    this.view.showNewContactForm.bind(this);
    this.view.hideNewContactForm.bind(this);
  }
}