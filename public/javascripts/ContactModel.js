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