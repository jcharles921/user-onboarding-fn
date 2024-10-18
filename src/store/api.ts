// store/apis.ts
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_RESPONSIBILITIES, GET_PRODUCT_TAG, GET_PRODUCTS } from '../graphql/queries';
import apolloClient from '../lib/apolloclient';


class Api {

  resetAll = createAction('resetAll');

  responsibilities = createAsyncThunk(
    'fetchResponsibilities',
    async (_, { rejectWithValue }) => {
      try {
        const response = await apolloClient.query({
          query: GET_RESPONSIBILITIES,
        });
        return response.data.getResponsibilities.data;
      } catch (error: any) {
        return rejectWithValue({ error: error?.message });
      }
    }
  );

  // Fetch product tags query
  productTags = createAsyncThunk(
    'fetchProductTags',
    async (_, { rejectWithValue }) => {
      try {
        const response = await apolloClient.query({
          query: GET_PRODUCT_TAG,
        });
        return response.data.getProductTags.data;
      } catch (error: any) {
        return rejectWithValue({ error: error?.message });
      }
    }
  );

  // Fetch products query
  products = createAsyncThunk(
    'fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await apolloClient.query({
          query: GET_PRODUCTS,
        });
        return response.data.getProducts.data;
      } catch (error: any) {
        return rejectWithValue({ error: error?.message });
      }
    }
  );
}
const apis = new Api();
export default apis;
