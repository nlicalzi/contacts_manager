# Contacts Manager
Contact Manager app for JS230 take-home assessment practice, reproducing functionality from http://devsaran.github.io/contact-manager-backbone/#home

### MVC:

* **Model**: manages internal table of data attributes and triggers `"change"` events when data is modified
  * Orchestrates data and business logic
  * Loads and saves data from the server
  * Emits events when data changes
* **View**: atomic chunks of user interface, listening to model `"change"` events to re/render themselves.
  * Listens for changes and renders UI
  * Handles user input and interactivity
  * Sends captured input to the model
* **Controller**: the go-between for the Model and the View.
  * Handles any user interaction coming from the View.
  * Determines any changes that need to be made to the Model.
  * Manipulates data from the Model to give to the View for rendering a final output.

<img src="https://www.tutorialspoint.com/sencha_touch/images/mvc.jpg" alt="MVC interactions" style="zoom:67%;" />

### Entities/Objects:

* `Contact`
  * State:
    * ID (autoincrementing int)
    * Full Name (str, req)
    * Email (str, req), validate: validate with regex, includes `@` and `.` in right places
    * Phone Number (number or string, req)
    * Tags (comma separated strs or `null`, opt)
  * Behavior:
* `ContactManager`
  * State:
  * Behavior:
    * Rendering individual contacts
    * Searching/filtering contacts
    * CRUD for contacts
    * Send/receive contact info to/from API
* `Tag`
  * State:
    * ID (autoincrementing int)
    * Tag Name (str)
  * Behavior:
    * .
* `API`
  * State:
  * Behavior:
    * CRUD operations w/ API endpoint
* `App`
  * State:
  * Behavior:

### Event Handlers:

* **On load**
  * EITHER: display contacts or no contacts message & Add Contact button (STATIC VIEW)
* **On Add Contact button click:**
  * Reveal/scroll-up Create Contact form modal (incl submit & cancel buttons)
* **On Submit button click (Add Contact form)**
  * Send data to server
  * Scroll form up to hide
  * Display contacts
* **On Cancel button click (Add Contact form)**
  * 
* **On delete button click:**
  * Alert with confirmation question
    * If yes, ping API w/ delete request
    * If no, cancel
* **On search bar input:**
  * Search contacts by name and return best match
    * If there is a match, display the contact info
    * If there is no match for the substring, log an error message
* **On Add Contact button click:**
  * Display Create Contact form:
    * Create Contact header
    * Full Name text input
    * Email Address text input
    * Telephone Number text input
    * Submit Button
    * Cancel Button