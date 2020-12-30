class Model {
  // implement tagging
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
      url: '/api/contacts/',
      dataType: 'json',
    });
  }

  createContact(contact) {
    $.ajax({
      type: 'POST',
      url: '/api/contacts/',
      headers: { 'Content-Type': 'application/json'},
      data: JSON.stringify(contact),
      dataType: 'json'
    });
    contact['id'] = this.#incrementId();
    this.contacts.push(contact);
  }

  updateContact(id) { // Called when contact is edited
  }

  deleteContact(id) {
    $.ajax({
      type: 'DELETE',
      url: `/api/contacts/${id}`,
    });
    let idx = this.contacts.map(el => el.id).indexOf(Number(id));
    this.contacts.splice(idx, 1);
  }

  #incrementId() {
    let maxId = Math.max(...this.contacts.map(el => el.id));
    return maxId + 1;
  }

  // TO IMPLEMENT
  // filter contacts based on search input (search bar input)
  // filter contacts based on tag selection (tag button click)
}