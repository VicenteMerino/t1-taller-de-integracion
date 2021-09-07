import { URL } from '../url';

export async function getUsers(page, param) {
  if (param) {
    const response = await fetch(`${URL}/users?_page=${page}&q=${param}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'json',
      },
    });

    const res = await response.json();
    console.log(res)
    return { response, res };
  } else {
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
}
