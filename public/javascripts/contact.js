class Contact {
  constructor(name, email, telephone, tags) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.tags = tags;
    this.id = Contact.#incrementId();
  }

  static #incrementId() { // should this also ping the API?
    if (!this.latestId) {
      this.latestId = 1; 
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}