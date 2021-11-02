import { store } from './auth.service'


export default function authHeader() {
  const user = JSON.parse(store.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}