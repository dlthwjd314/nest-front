import { EditContact } from './types';

//const apiBaseUrl = 'https://nest-server-test1.herokuapp.com/contacts';
const apiBaseUrl = 'https://nest-server-test1.herokuapp.com/contacts';

export const getAll = async () => {
  const response = await fetch(apiBaseUrl);
  return response;
};

export const remove = async (id: number) => {
  const result = await fetch(`${apiBaseUrl}/${id}`, {
    method: 'DELETE',
  });
  return result;
};

export const create = async (editContact: EditContact) => {
  const result = await fetch(`${apiBaseUrl}`, {
    method: 'POST',
    body: JSON.stringify({ ...editContact, age: Number(editContact.age) }), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return result;
};
