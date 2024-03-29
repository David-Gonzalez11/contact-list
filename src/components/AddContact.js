import React from "react"
import { Link } from "react-router-dom"
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!")
      return
    }
    console.log(this.state)
    const newContact = {
      name: this.state.name,
      email: this.state.email,
    }
    this.props.addContactHandler(newContact)
    this.setState({ name: "", email: "" })
  }
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          {/* <Link to="/"> */}
          <button className="ui button blue" type="button" onClick={this.add}>
            Add
          </button>
          {/* </Link> */}
        </form>
      </div>
    )
  }
}

export default AddContact
