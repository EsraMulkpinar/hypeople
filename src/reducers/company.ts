import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";
 export interface Company {
  logo:string
  name:string
  descriptionShort:string
}
interface CompanyState{
  companies : Company[] | null
}
 const initialState : CompanyState = {
  companies: null,
}
export const getCompany = createAsyncThunk("getCompany", async () => {
  try {
    const response = await instance.get("");
    
    return response.data;
  } catch (error) {
    console.error("İstekte bir hata oluştu:", error);
    throw error;
  }
});
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompany.fulfilled, (state, action) => {
      state.companies = action.payload.companies;
    });
  },
});

export default companySlice.reducer;
