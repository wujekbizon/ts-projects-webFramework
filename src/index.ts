import { User } from './models/User';

const user = User.buildUser({ id: 3 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
user.set({ name: 'Test Name2', age: 100 });

user.on('save', () => {
  console.log('User succesfully saved to db');
});
user.save();
