class API {
  static URL() {
    return '/api/contacts';
  }

  static getAllContacts() {
    return $.get({
      url: this.URL(),
      dataType: 'json',
    });
  }
  static createContact(contact) {}
  static getContact(id) {
    return $.get({
      url: `${this.URL()}/${id}`,
      dataType: 'json',
    });
  }
  static updateContact(id) {}
  static deleteContact(id) {}
}

// fetch(resource [, init])
// init takes: method, headers, body, mode
// method: GET, POST, etc
// headers: self evident
// body: data

// get all contacts returns:
// HTTP/1.1 200 OK
// [
//   {
//     "id": 1,
//     "full_name": "Arthur Dent",
//     "email": "dent@example.com",
//     "phone_number": "12345678901",
//     "tags": "work,business"
//   },
//   {
//     "id": 2,
//     "full_name": "George Smiley",
//     "email": "smiley@example.com",
//     "phone_number": "12345678901",
//     "tags": null
//   }
// ]