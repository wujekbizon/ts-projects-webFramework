import { User } from './models/User';

const user = new User({});

user.set({ age: 99, name: 'newName' });

console.log(user.get('name'));
console.log(user.get('age'));
