class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.bindHandlers();
    this.loadInitialState();
    this.view.revealContainer();
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
      this.view.showNoContactsCard();
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
    if (confirm("Are you sure you want to delete this contact? It can't be undone.")) {
      if (this.model.contacts.length === 1) {
        this.model.contacts = [];
      }
      this.model.deleteContact(id);
      this.refreshContactsList();
    }
  }

  handleEditContact = (id) => {
    $('.edit-contact-form')[0].setAttribute('data-latestid', id);

    let contact = this.model.contacts.filter(contact => contact.id === Number(id))[0];
    let { full_name, email, phone_number, tags } = contact;

    $('#editContactFullName').val(full_name);
    $('#editContactEmail').val(email);
    $('#editContactPhoneNumber').val(phone_number);
    $('#editContactTags').val(tags)
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

  handleTagClick = (tag) => {
    let contactsWithTag = this.model.contacts.filter(function(contact) {
      if (contact.tags) { return contact.tags.includes(tag) }
    });
    this.refreshContactsList(contactsWithTag);
  }

  handleClearTagClick = () => {
    this.refreshContactsList();
  }

  handleCancelButton = () => {
    this.refreshContactsList();
  }

  bindHandlers = () => {
    this.view.bindAddContact();
    this.view.bindCancelButton(this.handleCancelButton);
    this.view.bindClearTagClick(this.handleClearTagClick);
    this.view.bindTagClick(this.handleTagClick);
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