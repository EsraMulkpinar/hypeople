import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";
export interface Company {
  id:number
  logo: string;
  name: string;
  descriptionShort: string;
  industries: string[];
}
interface CompanyState {
  companies: Company[] | null;
}
const initialState: CompanyState = {
  companies: null,
};
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
      state.companies = action.payload.companies.map((company:Company) => ({...company,key:company.id.toString()}));
    });
  },
});

export default companySlice.reducer;
