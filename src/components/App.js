import React, { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetail from "./ContactDetail"
import "../../src/App.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(() => {
   const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedContacts ? JSON.parse(storedContacts) : [];
})

  const addContactHandler = (contact) => {
    console.log('kmkmk"', contact)
    const newContact = { id: uuid(), ...contact };

   setContacts((prevContacts) => [...prevContacts, newContact]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, newContact])
    );
  }

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id
  //   })

  //   setContacts(newContactList)
  // }

  useEffect(() => {
    localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                // getContactId={removeContactHandler}
              />
            }
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                // getContactId={removeContactHandler}
              />
            )}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
