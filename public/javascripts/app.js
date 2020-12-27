// Logic for running the app goes here
class App {
  constructor() {
    // state
    // register templates and partials
  }

  // behaviors
  registerHandlers() {
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

new App(); // start the app