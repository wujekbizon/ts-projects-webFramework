import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
user.set({ name: 'Admin', age: 30 });

user.on('save', () => {
  console.log('User succesfully saved to db');
});
user.save();
