import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectedFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchValue = useSelector(selectedFilter);
  const searchId = useId();
  const dispatch = useDispatch();

  const onFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={onFilter}
        className={css.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={searchValue}
      />
    </div>
  );
};

export default SearchBox;
