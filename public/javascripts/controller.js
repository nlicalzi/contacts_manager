class Controller {
  constructor() {
    // set state here
  }

  // set behaviors here
  addNewContact() {
    // on form submit...
    let inputs = document.querySelectorAll('form input');
    [...inputs].map(input => input.value);
    // do something with the value of the above
  }

  renderContact() {
    // modify these...
    let template = $('#contactsTemplate').html(); // this is our handlebars template
    let contact = { name: 'Nicholas LiCalzi', phone: '646-351-9917', email: 'nicholas.licalzi@gmail.com' };
    let templateScript = Handlebars.compile(template);
    let html = templateScript(contact);
    $('.contacts-container').append(html); // this is where we will render the template
    // do something with the above...
  }
}