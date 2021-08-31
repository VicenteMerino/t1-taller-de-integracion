import { getUsers } from './getUsers';

export async function getAllUsers(param) {
  let users = [];
  let page = 1;
  let allPaginated = false;
  while (!allPaginated) {
    const { response, res } = await getUsers(page, param);
    if (res.length) {
      users = users.concat(res);
    } else {
      allPaginated = true;
    }
    page += 1;
  }
  const uniqueUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (!uniqueUsers.includes(users[i])) {
      uniqueUsers.push(users[i]);
    }
  }
  return users;
}
