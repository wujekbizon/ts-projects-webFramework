import { User } from './models/User';

const user = new User({ name: 'new User', age: 18 });

user.save();
