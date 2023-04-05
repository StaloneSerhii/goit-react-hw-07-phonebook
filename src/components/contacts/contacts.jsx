import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getContact, getError, getIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { deleteContact, fetchContact } from 'redux/operations';

export const Contacts = () => {
  const contact = useSelector(getContact);
  // const isLoad = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  // const fiterRenderValue = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contact.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const filterRend = fiterRenderValue();
  console.log(contact);
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contact.map(({ id, name, phone }) => (
          <li key={id}>
            <p>Name:</p>
            <span>{name}</span>
            <p>Number:</p>
            <span>{phone}</span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
