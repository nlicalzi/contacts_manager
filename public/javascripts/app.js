// Logic for running the app goes here
class App {
  constructor() {
    // state
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
    // register templates and partials
    // this.bindHandlers();
  }

  // behaviors
  // bindHandlers() {
  //   View.showNewContactForm.bind(this);
  // }
}

$(app = new App()); // start the app