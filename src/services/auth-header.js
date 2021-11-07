import { store } from './auth.service'


export default function authHeader() {
  const token = JSON.parse(store.getItem('user'));

  if (token && token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}