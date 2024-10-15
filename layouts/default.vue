<script setup lang="ts">

</script>

<template>
	<div class="default-layouts">
		<div class="default-layouts__header">
			<Header></Header>
		</div>
		<div class="default-layouts__body">
				<slot></slot>
		</div>
		<div class="default-layouts__footer">
			<Footer></Footer>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/layouts/styles/default-layouts";
</style>
