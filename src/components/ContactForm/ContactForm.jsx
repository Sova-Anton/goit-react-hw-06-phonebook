import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Box from '../Box';
import {
  FormSection,
  LabelForm,
  Input,
  ButtonForm,
} from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      maxWidth="500px"
      ml="auto"
      mr="auto"
      border="1px solid"
      borderRadius="10px"
      borderColor="#7979f2"
    >
      <FormSection onSubmit={handleSubmit}>
        <LabelForm htmlFor="{nameId}">Name</LabelForm>
        <Input
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <LabelForm htmlFor="{numberId}">Number</LabelForm>
        <Input
          id={numberId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormSection>
    </Box>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameId = nanoid();
//   numberId = nanoid();

//   handleChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.addContact({ name, number });
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { nameId, numberId } = this;
//     const { name, number } = this.state;
//     return (
//       <Box maxWidth='500px' ml='auto' mr='auto' border="1px solid" borderRadius='10px' borderColor='#7979f2'>
//         <FormSection onSubmit={this.handleSubmit}>
//           <LabelForm htmlFor="{nameId}">Name</LabelForm>
//           <Input
//             id={nameId}
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />

//           <LabelForm htmlFor="{numberId}">Number</LabelForm>
//           <Input
//             id={numberId}
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />

//           <ButtonForm type="submit">Add contact</ButtonForm>
//         </FormSection>
//         </Box>

//     );
//   }
// }
