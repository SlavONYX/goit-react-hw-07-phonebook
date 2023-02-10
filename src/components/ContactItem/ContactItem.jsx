import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';

export default function ContactItem ({ id, name, phone }) {
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
 
  return(
    <li key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        type="button"
        name={name}
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >

        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
