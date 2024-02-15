import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const warning = 'Haha what are you doing? This is a console';

  console.log(warning);
  return (
    <>
      <div className="navbar bg-gradient-to-tr from-indigo-800 to-indigo-950 text-white lg:p-6">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-indigo-600 rounded-box w-52 lg:hidden"
            >
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a>TechFind?</a>
                <ul className="p-2">
                  <li>
                    <Link to="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <a>History</a>
                  </li>
                </ul>
              </li>
              {currentUser ? (
                <li>
                  <Link to="/profile">
                    <span>Profile</span>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="sign-in">
                      <span>Sign In</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="sign-up">
                      <span>Sign Up</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <span className="btn btn-ghost text-xl">iTechFinder</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <details>
                <summary>TechFind?</summary>
                <ul className="p-2 bg-indigo-600">
                  <li>
                    <Link to="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <a>History</a>
                  </li>
                </ul>
              </details>
            </li>
            {currentUser ? (
              <li>
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="sign-in">
                    <span>Sign In</span>
                  </Link>
                </li>
                <li>
                  <Link to="sign-up">
                    <span>Sign Up</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}
