import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProfileData {
  fullName: string;
  updatedAt: string;
  value: string; 
  email: string;
}


interface ProfileState {
  data: ProfileData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchBalance = createAsyncThunk<
  ProfileData,
  void,
  { rejectValue: string }
>("profile/fetchBalance", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found");

    const res = await fetch("http://localhost:8080/api/v1/user/info-balance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch profile data");

    return data.data; // Ambil seluruh objek: { fullName, updatedAt, value }
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});


const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default profileSlice.reducer;
