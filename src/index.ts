import { User } from './models/User';

const user = new User({ name: 'new User', age: 18 });

user.on('change', () => {
  console.log('on');
});

user.trigger('change');
