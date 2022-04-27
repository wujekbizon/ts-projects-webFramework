import { User } from './models/User';

const user = new User({ name: 'new User', age: 18 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ age: 20 });
