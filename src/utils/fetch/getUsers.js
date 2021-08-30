import { URL } from '../url';

export async function getUsers(page) {
  const response = await fetch(`${URL}/users?_page=${page}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
