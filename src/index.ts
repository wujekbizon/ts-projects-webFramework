import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 100 });

user.on('save', () => {
  console.log(user);
});

user.save();
