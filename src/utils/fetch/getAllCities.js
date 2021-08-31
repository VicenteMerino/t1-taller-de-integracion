import { getCities } from './getCities';

export async function getAllCities(param) {
  let cities = [];
  let page = 1;
  let allPaginated = false;
  while (!allPaginated) {
    const { response, res } = await getCities(page, param);
    if (res.length) {
      cities = cities.concat(res);

    } else {
      allPaginated = true;
    }
    page += 1;
  }
  return cities;
}
