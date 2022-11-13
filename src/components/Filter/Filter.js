// import { Component } from "react";
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

 const Filter = ({value, onChange}) => {
return  (<FilterLabel>
        Find contacts by name <FilterInput type='text' value={value} onChange={onChange} />
  </FilterLabel>)
};
export default Filter;


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};