import React from 'react';
import { LabelFilter, InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter type="text" name="filter" value={filter} onChange={changeFilter} />
    </LabelFilter>
  );
}