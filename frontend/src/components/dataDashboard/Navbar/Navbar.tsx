import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../../../store/features/dashboard/authSlice";
import { useAppDispatch } from "../../../store/hooks";
import { Container } from "../../EmailApp";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currPath = location.pathname;

  const logoutBtnHandler = () => {
    dispatch(setUser({ user: null, token: null }));
    Cookies.remove("user");
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b shadow-md">
      <Container>
        <nav className="flex flex-row items-center justify-between w-full p-4">
          <h2
            onClick={() => navigate("/")}
            className="text-2xl font-bold cursor-pointer ">
            Roc8 Moonshot🚀
          </h2>
          {currPath == "/dashboard" && (
            <>
              <button
                onClick={logoutBtnHandler}
                className="px-3 py-1 font-medium text-white bg-red-600 rounded-lg cursor-pointer">
                Logout
              </button>
            </>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
