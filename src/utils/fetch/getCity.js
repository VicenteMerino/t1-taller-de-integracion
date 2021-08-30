import { URL } from '../url';

export async function getCity(id) {
  const response = await fetch(`${URL}/cities/${id}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
