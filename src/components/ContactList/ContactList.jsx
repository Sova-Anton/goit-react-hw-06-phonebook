import React from 'react';
import { ItemContact, ButtonContact } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getFilteredContacts(filter, contacts);

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ItemContact key={id}>
          {name}: {number}
          <ButtonContact type="button" onClick={() => removeContact(id)}>
            Delete
          </ButtonContact>
        </ItemContact>
      ))}
    </ul>
  );
}
