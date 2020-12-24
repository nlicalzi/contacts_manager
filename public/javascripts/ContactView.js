// This class should handle basic functionality for manipulating the DOM
// The View should only handle said operations, let the Model do data manipulation

class ContactView {
  constructor(model) {
    // set initial state & explicit bindings as necessary
    this.model = model;
    this.addContactEvent = new Event(this);
    this.deleteContactEvent = new Event(this);
    this.updateContactEvent = new Event(this);
    this.loadContactsEvent = new Event(this);
  }

  // add behaviors

  bindEventHandlers() {}  // bind event handlers specific to the view
}