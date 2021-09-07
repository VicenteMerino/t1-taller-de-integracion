import { URL } from '../url';

export async function getCities(page, param) {
  let fetchUrl;
  if (param) {
    fetchUrl = `${URL}/cities?_page=${page}&q=${param}`;
  } else {
    fetchUrl = `${URL}/cities?_page=${page}`
  }
  console.log(fetchUrl)
  const response = await fetch(fetchUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json',
    },
  });
  const res = await response.json();
  return { response, res };
}
