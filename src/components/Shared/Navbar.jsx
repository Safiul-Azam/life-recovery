import { Link } from "react-router-dom";
import logo from "../../Assets/life-recovery.png";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => state.auth);

  const { username, img } = user;

  const handleSignOut = async () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };

  const profileMenu = (
    <>
      <li>
        <Link to="/" className="justify-between">
          {username && username?.slice(0, 10)}
          <span className="badge badge-primary text-white">New</span>
        </Link>
      </li>

      <li>
        {accessToken ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <nav className="bg-[#080d18]">
      <div className="container max-w-7xl py-3 mx-auto navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="text-lg text-slate-100 font-bold uppercase flex justify-center items-center gap-1"
          >
            <img width={45} src={logo} alt="" />
            Life Recovery
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar flex"
            >
              <div className="w-8 rounded-full">
                <img
                  src={
                    img
                      ? `${img}`
                      : "https://res.cloudinary.com/dev-shahriyar/image/upload/v1664434575/Avater/avater-islamic-man_qwwstv.jpg"
                  }
                  alt=""
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact bg-[#080d18] text-slate-100 dropdown-content mt-4 p-2 shadow rounded-md w-52"
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
