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

  createContact(partialContact) {
    let {full_name, email, phone_number} = partialContact;
    console.log('creating contact: ' + String(partialContact));
    this.onContactListChanged(this.contacts);
  }

  updateContact(id) {
    // this.onContactListChanged(this.contacts);
  }

  deleteContact(id) {
    // this.onContactListChanged(this.contacts);
  }

  #incrementId() {
    // map this.contacts to id, return largest el in array + 1
  }

  bindContactListChanged(callback) {
    this.onContactListChanged = callback;
  }
}