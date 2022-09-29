import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className=" bg-transparent">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <img width={50} src={logo} alt="" />
          <Link to="/" className="text-xl text-white font-bold uppercase">
            Life<span className="ml-2 "> Recovery</span>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar flex"
            >
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            {user && user?.displayName}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              {user ? (
                <li>
                  <button onClick={() => signOut(auth)}>Logout</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
