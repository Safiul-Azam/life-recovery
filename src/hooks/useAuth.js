import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../firebase.init";

const useAuth = () => {
  // const auth = useSelector((state) => state.auth);
  const [user] = useAuthState(auth);

  if (user) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
