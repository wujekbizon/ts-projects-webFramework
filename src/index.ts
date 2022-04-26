import { User } from './models/User';

const user = new User({ name: 'new User', age: 18 });

user.events.on('change', () => {
  document.body.style.backgroundColor = 'red';
});

user.events.trigger('change');
