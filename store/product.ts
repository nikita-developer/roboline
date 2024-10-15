import { defineStore } from "pinia";
import type Product from "@/interfaces/Products";
import type Page from "@/interfaces/Page";

export interface DataProducts {
  page?: Page;
  products: Product[];
}

export const defaultDataProducts = (): DataProducts => {
  return { products: [] };
};

export const useProductStore = defineStore("product", () => {
  const products = ref<DataProducts>(defaultDataProducts());

  const basket = ref<Product[]>(JSON.parse(localStorage.getItem('basket') || '[]'));
  const filter_products = ref<Product[]>([]);
  const addProductBasket = (product: Product) => {
    (!basket.value.some((el: Product) => el.id === product.id)) && basket.value.push({ ...product })
  };

  const getProducts = async () => {
    try {
      const res = await fetch("https://webapi.omoloko.ru/api/v1/products");
      products.value = await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const removeProductBasket = (product: Product) => basket.value = basket.value.filter((el: Product) => el.id !== product.id)

  const filterProduct = (search: string) => filter_products.value = products.value.products.filter((product: Product) => product.title?.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  watch(
      () => basket.value.length,
      () => localStorage.setItem('basket', JSON.stringify(basket.value))
  )

  return {
    getProducts,
    addProductBasket,
    filterProduct,
    removeProductBasket,
    products,
    basket,
    filter_products,
  };
});
