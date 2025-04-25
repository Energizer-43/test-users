import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/app/types/user";
import axios from "../../utils/axios";

type UsersState = {
  users: User[];
  isLoading: boolean;
  isError: null | string | undefined;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: null,
};

export const getUsers = createAsyncThunk<
  User[],
  undefined,
  { rejectValue: string }
>("users/getUsers", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/users");

    return data as User[];
  } catch (error) {
    return rejectWithValue("Ошибка сервера!");
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      (state.isLoading = true), (state.isError = null);
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.isError = null),
        (state.users = action.payload);
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      (state.isLoading = false), (state.isError = action.payload);
    });
  },
});

export default usersSlice.reducer;
