// import { Component } from "react";
import { ContactItem } from "./Contact";
import PropTypes from 'prop-types';
import { ContactListUl } from "./ContactList.styled";


export const ContactList = ({contacts, deletContact}) => {
 return (<ContactListUl>
     {contacts.map(({ id, name, number }) => <ContactItem key={id} id={id} name={name} number={number} deletContactMethod={deletContact} />
        )}
    </ContactListUl>)
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape{
    id: PropTypes.string.isRequired,
  }),
  deletContact: PropTypes.func.isRequired,
}


