class Controller {
  constructor(contact, view) {
    this.contact = contact;
    this.view = view;
  }

  // set behaviors here
  addNewContact() {
    // on form submit...
    let inputs = document.querySelectorAll('form input');
    [...inputs].map(input => input.value);
    // do something with the value of the above
  }

  renderContact() {
    // modify these...
    let template = $('#contactsTemplate').html(); // this is our handlebars template
    let contact = { name: 'Nicholas LiCalzi', phone: '646-351-9917', email: 'nicholas.licalzi@gmail.com' };
    let templateScript = Handlebars.compile(template);
    let html = templateScript(contact);
    $('.contacts-container').append(html); // this is where we will render the template
    // do something with the above...
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