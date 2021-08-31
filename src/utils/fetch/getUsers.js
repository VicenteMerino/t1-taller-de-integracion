import { URL } from '../url';

export async function getUsers(page, param) {
  if (param) {
    const nameResponse = await fetch(`${URL}/users?_page=${page}&name=${param}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'json',
      },
    });
    const lastNameResponse = await fetch(`${URL}/users?_page=${page}&lastName=${param}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'json',
      },
    });
    const nameRes = await nameResponse.json();
    const lastNameRes = await lastNameResponse.json();
    const res = nameRes.concat(lastNameRes);
    console.log(res)
    return { nameRes, res };
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
