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

  updateContact(contact) {
    $.ajax({
      type: 'PUT',
      url: `/api/contacts/${contact.id}`,
      headers: { 'Content-Type': 'application/json'},
      data: JSON.stringify(contact),
      dataType: 'json'
    });

    // edit contact info in in-memory store
    let prevContact = this.contacts.filter(
      c => Number(c.id) === Number(contact.id)
    )[0];
    
    let prevContactIdx = this.contacts.indexOf(prevContact);
    if (prevContactIdx !== -1) { this.contacts[prevContactIdx] = contact; }
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