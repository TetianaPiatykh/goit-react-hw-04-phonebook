import { Component } from "react";
import Form from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import { FirstTitle, SecondTitle, AppForm } from "./App.styled";


export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  newContackEdit = ({ name, number }) => {
     const { contacts } = this.state;
    const contact = { id: nanoid(), name, number };

     contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()) ? 
       alert(contact.name + ' is already in contacts!')
       :  this.setState(prevState => ({
       contacts: [contact, ...prevState.contacts],
      }))
  };

  deletContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  handleInputFilter = (e) => {
    
    this.setState({ filter: e.currentTarget.value})
  }

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
 

  render() {
    const visibleContacts = this.visibleContacts();
  

    return (
       
      
    <AppForm
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
          color: '#010101'
        
      }}
       >
    <FirstTitle>Phonebook</FirstTitle>     
        <Form onSubmit={this.newContackEdit} />
        
    <SecondTitle>Contacts</SecondTitle>    
        <Filter value={this.state.filter} onChange={this.handleInputFilter} />
        <ContactList contacts={visibleContacts} deletContact={this.deletContact} />
 
    </AppForm>
  );
  }
 
};

