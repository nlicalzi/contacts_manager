// Logic for running the app goes here
class App {
  constructor() {
    // state
    this.model = new ContactModel();
    this.view = new View();
    this.controller = new Controller();
    // register templates and partials
  }

  // behaviors
}

let app;
$(app = new App()); // start the app