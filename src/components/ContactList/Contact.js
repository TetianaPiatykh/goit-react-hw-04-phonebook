
import { ContactLi, ContactName, DeletBtn } from "components/ContactList/ContactList.styled";
import { FaRegUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deletContactMethod }) => {
    return <ContactLi>
        <ContactName><FaRegUser/> {name} {number}</ContactName>
        <DeletBtn type="button" onClick={() => deletContactMethod(id)}>Delete</DeletBtn>
    </ContactLi>
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deletContactMethod: PropTypes.func.isRequired,
};