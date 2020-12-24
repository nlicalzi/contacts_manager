# Contacts Manager
Contact Manager app for JS230 take-home assessment practice, reproducing functionality from http://devsaran.github.io/contact-manager-backbone/#home

Entities:
* Contact
  * ID (autoincrementing int)
  * Full Name (str, req)
  * Email (str, req), validate: validate with regex, includes `@` and `.` in right places
  * Phone Number (number or string, req)
  * Tags (comma separated strs or `null`, opt)
* Tag (str)


Intended functionality:
* Display contacts:
  * If there are no contacts
    * Display message
    * Add Contact Button
  * If there are contacts:
    * Display contacts in rows of 3, fill left -> right
      * Contact display should have:
        * Full Name
        * Phone Number
        * Email
        * Edit button
        * Delete button
* On edit button click:
  * Display prepopulated Edit Contact form with current values
  * Submit Button
  * Cancel Button
* On delete button click:
  * Alert with confirmation question
    * If yes, ping API w/ delete request
    * If no, cancel
* On search bar input:
  * Search contacts by name and return best match
    * If there is a match, display the contact info
    * If there is no match for the substring, log an error message
* On Add Contact button click:
  * Display Create Contact form:
    * Create Contact header
    * Full Name text input
    * Email Address text input
    * Telephone Number text input
    * Submit Button
    * Cancel Button