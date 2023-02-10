import {  useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsApi';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    data.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContact({
          name: name,
          number: phone,
        });
    setName('');
    setPhone('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.formLabel}>
        <span>Phone number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">
        Add contact
      </button>
    </form>
  );
}
