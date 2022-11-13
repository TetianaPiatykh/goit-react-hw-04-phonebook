import { Component } from "react";
import PropTypes from 'prop-types';
import { FormSubmit, Label, Span, InputContactForm, FormBtn } from "./ContactForm.styled";

class Form extends Component {

    state = {
      name: '',
      number: '',
    }

 
    
  handleInputValue = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };


  handleSubmit = (e) => {
      e.preventDefault();

      this.props.onSubmit(this.state);

      this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: ''})
    }

    render() {

        return (
        <FormSubmit  onSubmit={this.handleSubmit}>
         <Label>
          <Span>Name</Span> 
           <InputContactForm
            
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
           />
           </Label>

          <Label>
          <Span>Number</Span> 
          <InputContactForm
            type="tel"
            name="number"
            // id={this.nameInputId}
            value={this.state.number}
            onChange={this.handleInputValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> 
           </Label>
           
           <FormBtn type="submit">add contact</FormBtn>
        </FormSubmit>  

        )
    }

}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};