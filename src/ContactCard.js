import React from "react";
import { Link } from "react-router-dom";
import { DeleteId } from "./components/DeleteId";
import ContactList from "./components/ContactList";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAkFBMVEX39/dAibw3eqX////G1eAZbqH7+vkugbj///w+hrRAirtAi7o8h7v4+Pb9/Pmuxdu6z97j6e1+o7+xydvW4uxWlMCCq8uOss0xg7YicaHL2OCft8t1m7fm7e7K2ud6psZimcEfe7hvochlnb8AdLOOrMIVebAGZ5xRhq2Xu9Utealynr9ViqxllLWjwterv894Zt+3AAAD9klEQVRoge2aXXeiOhRAETTBkARSUBNaRNtbtbZT//+/m2DHSiBhNEDnPmSvvvSFvc5JcvJx9DyHw+FwOBwOh8Ph+F8DAJUAyY9aaQiKbJ3GcZwm64zRkP6Ql7CkXEQYcij/OMRoUSYMjG4HtIg3GOIJnnwj/4F8ETM6YuqJF7IlhBMd0r4cUU6Lcou14oo53j0X4ThistqZxWfQbkVGGHOaI466zdINUR6Soc2fcP438XnM+eewA05IqZ9dGmA5aNhkc7NZul/+lVkmfUGGCpzeZ67cA1V2WvL7zBPEy0HWmJzbd5ol8G2A4gJyC7OMO++fchLdtJ6bYNx7poUr00AjLLdMjk0VDq76przYGb6Nty9xEsfP/5nc2wL0CjwsDTsGfPaCM+TZMBfm771mOWBb/Xd5GXyzNAzJNuvjpobP4qi4qouDXo2XPdSkMAQEV0GNVx5pB5wX9guMxvpxRHAd1tT5bI50bpj2WNsbfdBox+pRs70/16nxxjrjgBmmd1vtzyOdm1mrE8O60ai1cfPENmzjop401DPf18bNS9uKRhYGM17WzUH4cNS75ZnBUl1Ehqgb6uBL3c45iiwHG2TGYzfy6mbv4H/Riptnluq1cafeJXX1dOZf3I244dpuZdPUqMaTWtief6XhhqndFDfVsnMm367qR3FVH9Wc29azLrWsFt+7x9H3TXHbqztOovj9srKehK+6o/5qYB7r6qvZlzqb+Q1qe4ntWBvr6JndRb1vqmtuaFlJwdqccHycXhI+FW33Jee2i6ujpPBFrYgXh5b8EjfPLHdsZiikGK5I/ahAXtvuc9wYFXZmuX3o1BhusqBBfhDqEvN55ZbXPku1dtOEmyQMwqY7mDblVc6x9aZJW1Mcw8W6rf0j/1DSXtU12wmuOSBhPDV4zyRqznHErQ9IHmgMNk+7zEFwUqfbfDPcYRiuu9VTtbKJU48bX6E+lW1Zt5qplU3YLi0JAcrFB21JtzpQ1MeHPtdcwHZK1H8xq+o96/WwQOtLG6N82kmu5PtXz6ecQrm6QzHrpF5V9j0ue2fClTLJ5/6tiNfeb0ik/uA/Qbe7+z8Y0sbj1Y1uMcDjlUcfIbrbLR4H6QfQ8u64xdNAzQDywu90fwz3JL7hd+X8MNijdBW3kvPueS5+DWhuNyA63OKJDNv9oJ/8lvV9lHObDt3yCfPohrom/HyERhcgb0pvT+fev47RYvOqxuJ7Xd50H/fvIzUWvaqPy5Yc6t1CPGRj9nKrJnJaNZExksfs61wT/sepCPu9f98AJUVaLhCs4ELIk//hKWUjjXELcPnBQHo65RkDIfXGDljRU/Dzv5JwOBwOh8PhcDgcDgt+A9bbSX+XEcJjAAAAAElFTkSuQmCC"
        alt="user"
      />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link onClick={props.DeleteId} element={<ContactList />}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHander(id)}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
