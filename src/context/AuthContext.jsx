"use client";
import { getUserApi, signinApi, signupApi } from "@/services/authApiService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "loading":
      return { ...state, isloading: true, isAuthenticated: false };
    case "rejected":
      return { ...state, isAuthenticated: false, error: action.payload };
    case "user/loaded":
      return { ...state, isAuthenticated: true, user: action.payload };

    default:
      break;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  isloading: true,
  error: null,
};

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [{ user, isAuthenticated, isloading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const signin = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const signup = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signin", payload: user });
      router.push("/profile");
      toast.success(message);
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const getUser = async () => {
    dispatch({ type: "loading" });

    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isloading, signin, signup, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Cant not find context");
  return context;
}
