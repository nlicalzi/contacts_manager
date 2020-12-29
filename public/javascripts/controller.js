class Controller {
  constructor() {
    this.populateContactsList();

  }

  // set behaviors here
  addNewContact() {
    // on form submit...
    let inputs = document.querySelectorAll('form input');
    [...inputs].map(input => input.value);
    // do something with the value of the above
  }

  populateContactsList() {
    ContactModel.getAllContacts(function(contacts) {
      if (contacts.length === 0) {
        View.renderNoContactsCard();
      } else {
        contacts.forEach(contact => View.renderContact(contact))
      }
    });    
  }

  bindHandlers() {
    // button events
    this.handleAddContactButtonClick = this.handleAddContactButtonClick.bind(this);
    this.handleSubmitNewContactButtonClick  = this.handleSubmitNewContactButtonClick.bind(this);
    this.handleEditContactButtonClick = this.handleEditContactButtonClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    // search bar events
    this.handleSearchBarInput = this.handleSearchBarInput.bind(this);
  }
}