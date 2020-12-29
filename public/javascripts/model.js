class ContactModel {
  constructor(name, email, telephone, tags) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.tags = tags || [];
    this.id = ContactModel.#incrementId();
  }

  static getContact(id) {
    return $.get({
      url: `/api/contacts/${id}`,
      dataType: 'json',
    });
  }

  static getAllContacts(callback) {
    return $.get({
      url: '/api/contacts',
      dataType: 'json',
    }, callback);
  }

  static createContact(contact) {}
  static updateContact(id) {}
  static deleteContact(id) {}

  static #incrementId() { // should this also ping the API?
    if (!this.latestId) {
      this.latestId = 1; 
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}