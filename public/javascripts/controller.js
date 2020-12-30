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

  onContactListChanged = () => {
    this.view.clearAllContacts();
    this.renderContactsList();
  }

  handleAddContact = (contact) => {
  }

  handleSubmitAddedContact = (partialContact) => {
    console.log(partialContact);
    this.model.createContact(partialContact);
  }

  handleEditContact = () => {}
  handleSubmitEditedContact = () => {}
  handleDeleteContact = (id) => {
    this.model.deleteContact(id);   // not working yet
    this.view.clearContact(id);     // working
  }
  handleCancelButton = () => {}
  handleSearchBarInput = () => {}

  bindHandlers() {
    this.model.bindContactListChanged(this.onContactListChanged);

    this.view.bindAddContact(this.handleAddContact);
    this.view.bindSubmitContact(this.handleSubmitAddedContact);
    this.view.bindEditContact(this.handleEditContact);
    this.view.bindSubmitEditedContact(this.handleSubmitEditedContact);
    this.view.bindDeleteContact(this.handleDeleteContact);
    this.view.bindCancelButton(this.handleCancelButton);
    this.view.bindSearchBarInput(this.handleSearchBarInput);
  }
}