import React from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

export default function Filter({ value, changeFilter }) {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter type="text" name="filter" value={value} onChange={changeFilter} />
    </LabelFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};