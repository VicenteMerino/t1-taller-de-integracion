import { getUsers } from './getUsers';

export async function getAllUsers() {
  let users = [];
  let page = 1;
  let allPaginated = false;
  while (!allPaginated) {
    const { response, res } = await getUsers(page);
    if (res.length) {
      users = users.concat(res);

    } else {
      allPaginated = true;
    }
    page += 1;
  }
  return users;
}
