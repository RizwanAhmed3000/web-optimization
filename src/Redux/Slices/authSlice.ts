import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the state
interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: string | null;
}

// Define a type for the user object (adjust fields as needed)
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user fields here if necessary
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  // token: null,
  error: '',
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  //   reducers: {
  //     loginPending: (state) => {
  //       state.isLoading = true;
  //     },
  //     loginSuccess: (state, { payload }) => {
  //       state.isLoading = false;
  //       state.user = payload;
  //       // state.token = payload.token;
  //     },
  //     loginFailed: (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload;
  //     },
  //     logout: (state) => {
  //       state.isLoading = false;
  //       state.user = null;
  //       state.error = false;
  //     },
  //     signupPending: (state) => {
  //       state.isLoading = true;
  //     },
  //     signupSuccess: (state, { payload }) => {
  //       state.isLoading = false;
  //     },
  //     signupFailed: (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload.message;
  //     },
  //   },
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
    signupPending: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state) => {
      state.isLoading = false;
    },
    signupFailed: (state, action: PayloadAction<{ message: string }>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

const { reducer, actions } = AuthSlice;

export const {
  loginPending,
  loginSuccess,
  loginFailed,
  logout,
  signupPending,
  signupSuccess,
  signupFailed,
} = actions;

export default reducer;
