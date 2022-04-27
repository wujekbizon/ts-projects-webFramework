import { Collection } from './models/Collection';

const collecion = new Collection('http://localhost:3000/users');

collecion.on('change', () => {
  console.log(collecion);
});

collecion.fetch();
