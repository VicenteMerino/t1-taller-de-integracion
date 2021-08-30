import { URL } from '../url';

export async function getCities(page) {
  const response = await fetch(`${URL}/cities?_page=${page}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
