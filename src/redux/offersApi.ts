import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://deayloop.backend.test.starway.agency:8002";

interface Category {
  id: number;
  slug: string;
  href: string;
  path: string;
  is_maincategory: boolean;
  is_secondarycategory: boolean;
  title: string;
  title_en: string;
}

interface Offer {
  id: number;
  slug: string;
  title: string;
  category: Category;
  description: string | null;
  path: string;
  rating: number;
  tags: string[];
}

type OffersResponse = Offer[];

export const offersApi = createApi({
  reducerPath: "offersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getOffers: builder.query<OffersResponse, void>({
      query: () => "/api/offers/all/",
    }),
  }),
});

export const { useGetOffersQuery } = offersApi;
