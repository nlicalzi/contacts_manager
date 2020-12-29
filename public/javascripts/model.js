class Model {
  // contact: { id, name, email, phone_number, tags }
  constructor() {
    this.contacts = [];
  }

  getContact(id) {
    return $.get({
      url: `/api/contacts/${id}`,
      dataType: 'json',
    });
  }

  getAllContacts() {
    return $.get({
      url: '/api/contacts',
      dataType: 'json',
    });
  }

  createContact(contact) {

  }

  updateContact(id) {

  }

  deleteContact(id) {

  }

  #incrementId() {
    // map this.contacts to id, return largest el in array + 1
  }
}