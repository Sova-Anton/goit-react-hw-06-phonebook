import React from 'react';
import { ItemContact, ButtonContact } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  const visibleContacts = getFilteredContacts();

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
