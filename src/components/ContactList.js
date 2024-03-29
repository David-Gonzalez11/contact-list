import React from "react"
import ContactCard from "../ContactCard"
import { Link } from "react-router-dom"
const ContactList = (props) => {
  console.log(props)

  const deleteConactHandler = (id) => {
    props.getContactId(id)
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    )
  })
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="main">
        <p>{renderContactList}</p>
      </div>
    </div>
  )
}

export default ContactList
