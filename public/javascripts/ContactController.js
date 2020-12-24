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