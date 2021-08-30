import { URL } from '../url';

export async function getUser(id) {
  const response = await fetch(`${URL}/users/${id}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
