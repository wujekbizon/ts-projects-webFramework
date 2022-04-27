import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
const collecion = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

collecion.on('change', () => {
  console.log(collecion);
});

collecion.fetch();
