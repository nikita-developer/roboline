<script setup lang="ts">
import {useProductStore} from "~/store/product";
import {getListPaginations} from "~/composables/paginations";
import type Product from "~/interfaces/Products";

const store = useProductStore()

let visible_products = 10
const page = ref<number>(1)
const products = computed(() => getListPaginations(store.basket, page.value, visible_products))
const limit = computed<number>(() => Math.ceil(store.basket.length / visible_products))

const summa = computed(() => store.basket.reduce((result: number, product: Product) => product.cost + result, 0))

</script>

<template>
	<div class="container container--page">
		<div class="page">
			<div class="page__head">
				<h1 class="page__title">Корзина</h1>
				<div class="page__count-element">
					<p>Товаров: <span>{{store.basket.length}}</span></p>
					<p>Сумма: <span>{{summa}}</span></p>
				</div>
			</div>
			<div class="page__body">
				<div class="page__products" v-if="products.length">
					<Card basket v-for="product in products" :key="product.id" :product="product"></Card>
				</div>
			</div>
			<v-pagination
					class="page__pagination"
					v-if="store.basket.length > visible_products"
					v-model="page"
					:length="limit"
			></v-pagination>
		</div>
	</div>
</template>

<style scoped>
@import "@/pages/styles/basket.scss";
</style>
