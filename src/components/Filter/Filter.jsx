import css from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({filter, handleChange}) {

  return (
    <form>
      <label className={css.filterLabel}>
        <span>Filter</span>
        <input
          type="text"
          onChange={evt => handleChange(evt.target.value)}
          required
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};