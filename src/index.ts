import { User } from './models/User';

const user = new User({ name: 'Greg', age: 35 });

user.on('click', () => {});
user.on('click', () => {});
user.on('input', () => {});
console.log(user);
