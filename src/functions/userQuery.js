import { useQuery } from "@apollo/client";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import {
  setAuthenticated,
  setUser,
  resetUser,
} from "@redux/slices/userSlice.js";

import { useAuth } from "@hooks/useAuth";
import { GET_USER } from "@gql/user";

export const userQuery = async () => {
  const dispatch = useDispatch();

  const { user, token, userId } = useAuth();
  //const { isAuthenticated, token, user } = useSelector((state) => state.user);

  // console.log("Function token: ", token);
  try {
    if (!token) {
    } else {
      const { user_id: id } = jwtDecode(token);
      //const { user_id: id } = user;
      console.log("Functions: ", id);
      const { loading, error, data } = useQuery(GET_USER, {
        variables: { id },
        onCompleted: (user) => {
          dispatch(
            setUser({
              user: user.getUser,
            })
          );
          // console.log("DATA: ", user.getUser);
        },
      });
      if (loading || error) return null;
      // const user = data.getUser;

      // console.log("Functions User: ", user);

      // dispatch(
      //   setAuthenticated({
      //     isAuthenticated: true,
      //     token,
      //     user,
      //   })
      // );
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// export const loginUser = (username, password) => async (dispatch) => {
//   try {
//     // Realiza la lógica de autenticación para obtener el token
//     const token = await yourAuthenticationMethod(username, password);
//     if (token) {
//       // Almacena el token en el almacenamiento local
//       await AsyncStorage.setItem("token", token);
//       dispatch(login(token));
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   // Realiza la lógica para cerrar sesión y eliminar el token del almacenamiento local
//   try {
//     // ... (lógica para cerrar sesión)
//     await AsyncStorage.removeItem("token");
//     dispatch(logout());
//   } catch (error) {
//     console.error("Error during logout:", error);
//   }
// };
