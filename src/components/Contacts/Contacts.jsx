import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/constants';
import React from 'react';

import s from './Contacts.module.css';

const Contacts = ({ listContact }) => {
  const dispatch = useDispatch();

  if (!Array.isArray(listContact) || listContact.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={s.list}>
      {listContact.map(contact => (
        <li className={s.contact} key={contact.id}>
          {contact.name} - {contact.phone}
          <button
            className={s.btn}
            onClick={() => {
              dispatch(delContactsThunk(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default Contacts;
