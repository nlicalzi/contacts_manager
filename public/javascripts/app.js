// Logic for running the app goes here
class App {
  constructor() {
    // state
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
  }
}

let app;
$(app = new App());
