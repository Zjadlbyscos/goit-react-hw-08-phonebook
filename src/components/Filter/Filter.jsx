import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';

import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    dispatch(qwery(evt.currentTarget.value));
  };

  return (
    <div className={s.wrapper}>
      <h2> Find Contacts By Name</h2>
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Search"
        onChange={handleInputChange}
        value={filter}
      />
    </div>
  );
};

export default Filter;
