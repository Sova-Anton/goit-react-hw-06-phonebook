import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Box from './Box';
import { Title, Subtitle } from './App.styled';

export default function App() {
  return (
    <Box as="section" ml="auto" mr="auto" width="1400px" pr={3} pl={3}>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Box maxWidth="500px" ml="auto" mr="auto">
        <Filter />
      </Box>
      <Box maxWidth="500px" ml="auto" mr="auto" pt={3}>
        <ContactList />
      </Box>
    </Box>
  );
}
