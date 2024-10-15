<script setup lang="ts">
import type Product from "~/interfaces/Products";
import {useProductStore} from "~/store/product";

const store = useProductStore()

const loading = ref(false)

const { product, basket = false } = defineProps<{
	product: Product;
	basket?: boolean;
}>();

const addBasket = () => {
	loading.value = true
	setTimeout(() => {
		store.addProductBasket(product)
		loading.value = false
	}, 1000)
}

const removeProduct = () => store.removeProductBasket(product)
</script>

<template>
	<v-card
			:disabled="loading"
			:loading="loading"
			class="card"
	>
		<template v-slot:loader="{ isActive }">
			<v-progress-linear
					:active="isActive"
					color="deep-purple"
					height="4"
					indeterminate
			></v-progress-linear>
		</template>

		<v-img
				height="250"
				:src="product.image"
				cover
		></v-img>

		<v-card-item>
			<v-card-title>{{product.title}}</v-card-title>
		</v-card-item>

		<v-card-text>
			<div class="mb-4 text-subtitle-1">Цена: {{product.cost}}₽</div>
			<div>{{product.subtitle}}</div>
		</v-card-text>

		<v-card-actions v-if="basket">
			<v-btn
					color="deep-purple-lighten-2"
					text="Удалить"
					block
					border
					@click="removeProduct"
			></v-btn>
		</v-card-actions>

		<v-card-actions v-else>
			<v-btn
					color="deep-purple-lighten-2"
					text="В корзину"
					block
					border
					@click="addBasket"
			></v-btn>
		</v-card-actions>

	</v-card>
</template>

<style scoped>
@import "@/components/styles/card.scss";
</style>
