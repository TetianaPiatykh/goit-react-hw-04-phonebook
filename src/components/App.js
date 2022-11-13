import { useState } from "react";
import Form from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import { FirstTitle, SecondTitle, AppForm } from "./App.styled";
import {useLocalStorage} from "../../src/hooks/useLocalStorage"


export const App = () => {
  const [contacts, setContacts] = useLocalStorage( 'contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);

  const [filter, setFilter] = useState('');

  const handleFormSubmit = (data) => {
     const { name, number } = data;

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()) ?
      alert(data.name + ' is already in contacts!')
      : newContackEdit(name, number);
  };

  const deletContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
    );
  };


  const newContackEdit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

 

  const handleInputFilter = (e) => {
    
    setFilter(e.currentTarget.value);
  }

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
 
  

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
        <Form onSubmit={handleFormSubmit} />
        
    <SecondTitle>Contacts</SecondTitle>    
        <Filter value={filter} onChange={handleInputFilter} />
        <ContactList contacts={visibleContacts()} deletContact={deletContact} />
 
    </AppForm>
  );
  
 
};

