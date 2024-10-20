import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setUser } from "../../../store/features/dashboard/authSlice";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, token } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navitage = useNavigate();

  useEffect(() => {
    if (!user && !token) {
      const savedUser = Cookies.get("user");
      const parsedSavedUser = savedUser && JSON.parse(savedUser);
      if (parsedSavedUser?.user && parsedSavedUser?.token) {
        dispatch(
          setUser({
            user: parsedSavedUser?.user,
            token: parsedSavedUser?.token,
          })
        );
      } else {
        navitage("/login");
      }
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
