import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Box from './Box';
import { Title, Subtitle } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };

      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  isDuplicate = ({ name }) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  render() {
    const { addContact, removeContact, changeFilter, getFilteredContacts } =
      this;
    const { filter } = this.state;
    const visibleContacts = getFilteredContacts();
    return (
      <Box as="section" ml="auto" mr="auto" width="1400px" pr={3} pl={3}>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
        <Subtitle>Contacts</Subtitle>
        <Box maxWidth="500px" ml="auto" mr="auto">
          <Filter value={filter} changeFilter={changeFilter} />
        </Box>
        <Box maxWidth="500px" ml="auto" mr="auto" pt={3}>
          <ContactList
            contacts={visibleContacts}
            removeContact={removeContact}
          />
        </Box>
      </Box>
    );
  }
}
