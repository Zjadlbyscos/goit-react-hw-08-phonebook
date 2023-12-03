import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InfoUser from 'components/InfoUser/InfoUser';
import { selectToken, selectUser } from 'redux/constants';

export const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';
  console.log(user);
  return (
    <>
      <nav>
        <div>
          <Link to="/goit-react-hw-08-phonebook/contacts">Phonebook</Link>
          {!user && (
            <ul>
              {token && (
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              )}
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
        <InfoUser />
      </nav>
      <div>
        {user ? (
          <h1>Welcome {user.name} to your contacts</h1>
        ) : (
          <h1>Welcome guest, please login</h1>
        )}
      </div>
    </>
  );
};
