<script setup lang="ts">

const route = useRoute();
</script>

<template>
	<header class="header">
		<div class="container">
			<div class="header__body">
				<nuxt-link v-if="route.name !== 'index'" to="/" class="header__link">Главная</nuxt-link>
				<div v-else>Шапка сайта</div>
				<nuxt-link to="basket">
					<Icon class="header__basket" name="material-symbols:add-shopping-cart" size="30"/>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<style scoped>
@import "@/components/styles/header.scss";
</style>
