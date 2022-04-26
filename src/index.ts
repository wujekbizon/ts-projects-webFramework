import { User } from './models/User';

const user = new User({ name: 'Greg', age: 35 });

user.on('click', () => {
  console.log('Clicked first time');
});
user.on('click', () => {
  console.log('Clicked second time');
});
user.on('change', () => {
  document.body.style.backgroundColor = 'red';
});
console.log(user);

user.trigger('change');
user.trigger('click');
