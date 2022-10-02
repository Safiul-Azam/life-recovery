import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Assets/life-recovery.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const profileMenu = (
    <>
      <li>
        <Link to="/" className="justify-between">
          {user && user?.displayName?.slice(0, 10)}
          <span className="badge badge-primary text-white">New</span>
        </Link>
      </li>

      <li>
        {user ? (
          <button onClick={() => handleSignOut()}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <nav className=" bg-transparent">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="text-xl text-white font-bold uppercase flex justify-center items-center gap-1"
          >
            <img width={50} src={logo} alt="" />
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
                <img
                  src={
                    (user && user?.photoURL) ||
                    "https://res.cloudinary.com/dev-shahriyar/image/upload/v1664434575/Avater/avater-islamic-man_qwwstv.jpg"
                  }
                  alt=""
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {profileMenu}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
