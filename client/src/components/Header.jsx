import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../redux/user/user.slice';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/auth/signout');
      if (res) dispatch(signOut());
    } catch (err) {
      console.log(err);
    }
  };

  const warning = 'Haha what are you doing? This is a console';

  console.log(warning);
  return (
    <>
      <div className="navbar bg-gradient-to-tr from-blue-800 to-blue-950 text-white lg:p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-blue-600 rounded-box w-52 lg:hidden"
            >
              {currentUser && currentUser.isAdmin && (
                <li className="hover:bg-blue-700 rounded-lg">
                  <NavLink to="/dashboard">
                    <span>Dashboard</span>
                  </NavLink>
                </li>
              )}
              <li className="hover:bg-blue-700 rounded-lg">
                <NavLink to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-blue-700 rounded-lg">Services</summary>
                  <ul className="p-2 bg-blue-600 w-max">
                    <li className="hover:bg-blue-800 rounded-lg">
                      <span>Phone Repair</span>
                    </li>
                    <li className="hover:bg-blue-800 rounded-lg">
                      <span>Laptop Repair</span>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="hover:bg-blue-700 rounded-lg">
                <NavLink to="/about">
                  <span>About</span>
                </NavLink>
              </li>
              <li className="hover:bg-blue-700 rounded-lg">
                <span>Contact Us</span>
              </li>
              {!currentUser && (
                <>
                  <li className="hover:bg-blue-700 rounded-lg">
                    <NavLink to="sign-in">
                      <span>Sign In</span>
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-700 rounded-lg">
                    <NavLink to="sign-up">
                      <span>Sign Up</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <NavLink to="/">
            <span className="btn btn-ghost text-xl">iTechFinder</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {currentUser && currentUser.isAdmin && (
              <li className="hover:bg-blue-700 rounded-lg">
                <NavLink to="/dashboard">
                  <span>Dashboard</span>
                </NavLink>
              </li>
            )}
            <li className="hover:bg-blue-700 rounded-lg">
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="hover:bg-blue-700 rounded-lg">Services</summary>
                <ul className="p-2 bg-blue-600 w-max">
                  <li className="hover:bg-blue-800 rounded-lg">
                    <span>Phone Repair</span>
                  </li>
                  <li className="hover:bg-blue-800 rounded-lg">
                    <span>Laptop Repair</span>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-blue-700 rounded-lg">
              <NavLink to="/about">
                <span>About</span>
              </NavLink>
            </li>
            <li className="hover:bg-blue-700 rounded-lg">
              <span>Contact Us</span>
            </li>
            {!currentUser && (
              <li>
                <details>
                  <summary className="hover:bg-blue-700 rounded-lg">Connect with us</summary>
                  <ul className="p-2 bg-blue-600 w-max">
                    <li className="hover:bg-blue-800 rounded-lg">
                      <NavLink to="sign-in">
                        <span>Sign In</span>
                      </NavLink>
                    </li>
                    <li className="hover:bg-blue-800 rounded-lg">
                      <NavLink to="sign-up">
                        <span>Sign Up</span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {currentUser && (
            <div className="dropdown dropdown-bottom dropdown-end">
              <span
                tabIndex={0}
                className="btn p-3 bg-transparent border-none text-white rounded-full uppercase hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <ul
                tabIndex={0}
                className="dropdown-content z-[99] menu p-2 shadow rounded-box w-52 bg-blue-600"
              >
                <li className="hover:bg-blue-800 rounded-lg">
                  <NavLink to="/profile">
                    <span>Profile</span>
                  </NavLink>
                </li>
                {currentUser && currentUser.userType === 1 && (
                  <li className="hover:bg-blue-800 rounded-lg">
                    <NavLink to="/shop">
                      <span>My Shop</span>
                    </NavLink>
                  </li>
                )}
                <li className="hover:bg-blue-800 rounded-lg">
                  <span className="text-white cursor-pointer" onClick={handleSignOut}>
                    Sign out
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
