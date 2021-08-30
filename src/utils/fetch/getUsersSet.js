import { getUser } from './getUser';

export async function getUsersSet(usersIds) {
  let users = [];
  for (let i = 0; i < usersIds.length; i++) {
    const { response, res } = await getUser(usersIds[i]);
    users.push(res);
  }
  return users;
}
