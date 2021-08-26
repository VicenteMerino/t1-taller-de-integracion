export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'json'
    }
  });
  const res = await response.json();
  return { response, res }
}