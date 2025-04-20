import api from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct, RawProduct } from "@/types/types";
import { FORM_ID } from "@/constants/constant";

export const getProducts = createAsyncThunk<IProduct[]>(
  "products/get",
  async () => {
    const res = await api.get(`/form/${FORM_ID}/payment-info`);
    const rawProducts = res.data.content.products;

    const products: IProduct[] = rawProducts.map((item: RawProduct) => ({
      id: item.pid,
      name: item.name,
      price: parseFloat(item.price),
      img: JSON.parse(item.images)[0],
      description: item.description,
    }));

    return products;
  }
);
