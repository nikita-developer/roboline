<script setup lang="ts">
const model = defineModel();
const emit = defineEmits(["change"]);
</script>

<template>
	<input
			placeholder="Поиск"
			v-model="model"
			type="text"
			class="search"
			@input="emit('change')"
	/>
</template>

<style scoped lang="scss">
@import "@/components/styles/search";
</style>
