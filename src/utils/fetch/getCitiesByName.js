import { URL } from '../url';

export async function getCitiesByName(name) {
  const response = await fetch(`${URL}/cities?name=${name}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
