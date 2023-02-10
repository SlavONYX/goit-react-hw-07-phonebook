import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import  ContactItem  from 'components/ContactItem/ContactItem';

export default function ContactList({filter}) {

  const { data } = useGetContactsQuery();

  const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
  return contactsFiltered.length ? (
    <ul>
      {contactsFiltered.map(({ name, phone, id }) => (
        <ContactItem
          name={name}
          phone={phone}
          id={id}
          key={id}
        />
      ))}
    </ul>
  ) : (
    <p>There is no contact yet</p>
  );
}
}
