import { User } from './models/User';

const collecion = User.buildUserCollection();

collecion.on('change', () => {
  console.log(collecion);
});

collecion.fetch();
