<script setup lang="ts">
import { useProductStore } from "@/store/product";
import { getListPaginations } from "@/composables/paginations";

const store = useProductStore();

const search = shallowRef<string>("");
watch(
  () => search.value,
  () => store.filterProduct(search.value),
);

const page = ref<number>(1);
const products = computed(() => getListPaginations(store.filter_products, page.value, visible_products));
const limit = computed<number>(() => Math.ceil(store.products.products.length / visible_products));
let visible_products = 10;

onBeforeMount(async () => {
  await store.getProducts();
  store.filterProduct(search.value);
});
</script>

<template>
  <div class="container container--page">
    <div class="page">
      <div class="page__head">
	      <h1 class="page__title">Главная страница</h1>
      </div>
      <div class="page__body">
        <Search class="page__search" v-model="search"></Search>
        <div class="page__products" v-if="products.length">
          <Card
            v-for="product in products"
            :key="product.id"
            :product="product"
          ></Card>
        </div>
      </div>
      <v-pagination
        class="page__pagination"
        v-if="store.filter_products.length > visible_products"
        v-model="page"
        :length="limit"
      ></v-pagination>
    </div>
  </div>
</template>

<style scoped></style>
