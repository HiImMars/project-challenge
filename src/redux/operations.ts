// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios, { AxiosResponse } from "axios";

// axios.defaults.baseURL = "http://deayloop.backend.test.starway.agency:8002";

// interface Category {
//   id: number;
//   slug: string;
//   href: string;
//   path: string;
//   is_maincategory: boolean;
//   is_secondarycategory: boolean;
//   title: string;
//   title_en: string;
// }

// export interface Offer {
//   id: number;
//   slug: string;
//   title: string;
//   category: Category;
//   description: string | null;
//   path: string;
//   rating: number;
//   tags: string[];
// }

// export interface OffersState {
//   items: Offer[];
//   isLoading: boolean;
//   error: ErrorResponse | null;
// }

// // interface Offer {
// //   id: number;
// //   slug: string;
// //   title: string;
// // }

// export interface ErrorResponse {
//   message: string;
// }

// export const getOffers = createAsyncThunk<
//   Offer[],
//   void,
//   { rejectValue: ErrorResponse }
// >("offers/getAll", async (_, thunkAPI) => {
//   try {
//     const response: AxiosResponse<Offer[]> = await axios.get(
//       "/api/offers/all/"
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue({
//       message: "Network error",
//     } as ErrorResponse);
//   }
// });
