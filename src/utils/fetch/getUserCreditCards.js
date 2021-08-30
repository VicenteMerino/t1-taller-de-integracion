import { URL } from '../url';

export async function getUserCreditCards(id) {
  const response = await fetch(`${URL}/users/${id}/credit-cards`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
