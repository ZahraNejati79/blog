import { useContext, useReducer } from "react";

const AuthContext = useContext();
const authReducer = (state, action) => {
  switch (action) {
    case value:
      break;

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

export default AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Cant not find context");
}
