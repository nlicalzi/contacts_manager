// This class should handle basic functionality for CRUD operations on Contacts
// The Model should only handle said operations, let the View do rendering and HTML

class ContactModel {
  constructor() {
    // set initial state && explicit bindings as necessary
    this.contacts = [];
    this.addContactEvent = new Event(this);
    this.deleteContactEvent = new Event(this);
    this.updateContactEvent = new Event(this);
    this.loadContactsEvent = new Event(this);
  }

  // add behaviors
  addContact() {}
  deleteContact() {}
  updateContact() {}
  loadContacts() {}
}

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

// This class orchestrates interactions between the Model and the View, rather than having them handle it

class ContactController {
  constructor(model, view) {
    // set initial state
    this.model = model;
    this.view = view;

    // explicit bindings & other setup as necessary
  }

  // add behaviors

  bindEventHandlers() { // bind event handlers specific to the controller
    this.addContactHandler = this.addContact.bind(this);
  }

  addContact(sender, args) { // call the methods on the model object
    this.model.addContact(args.contact);
  }
}