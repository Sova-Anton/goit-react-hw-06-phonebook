import React from 'react';
import PropTypes from 'prop-types';
import { ItemContact, ButtonContact } from './ContactList.styled';

export default function ContactList({ contacts, removeContact }) {
  const elements = contacts.map(({ name, number, id }) => {
    return (
      <ItemContact key={id}>
        {name}: {number}
        <ButtonContact type="button" onClick={() => removeContact(id)}>
          Delete
        </ButtonContact>
      </ItemContact>
    );
  });

  return <ul>{elements}</ul>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
