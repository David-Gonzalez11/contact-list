import React from "react"
import ContactCard from "../ContactCard"
import { Link } from "react-router-dom"
const ContactList = (props) => {
  console.log(props)

  const deleteConactHandler = (id) => {
  }
  deleteConactHandler()

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

      </h2>
      <span>
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </span>
      <div className="main">
        <p>{renderContactList}</p>
      </div>
    </div>
  )
}

export default ContactList
