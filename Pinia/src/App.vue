<script setup>
import TasksComp from './components/tasksComp.vue'
import { usePiniaStore } from './stores/store'
const tasksStore = usePiniaStore()
if(tasksStore.loading === false){
    tasksStore.fetchTasks()
}
</script>

<template>
	<div class="app-container">
		<header class="app-header">
			<img src="https://pinia.vuejs.org/logo.svg" alt="Pinia Logo" class="pinia-logo" />
			<h1>Tasks to Do</h1>
		</header>
		<main class="app-main">
			<TasksComp />
		</main>
	</div>
</template>

<style scoped>
.app-container {
	min-height: 100vh;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	padding: 2rem;
}

.app-header {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 2rem;
	background: rgba(255, 255, 255, 0.95);
	padding: 2rem;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pinia-logo {
	width: 80px;
	height: 80px;
	object-fit: contain;
  rotate: -15deg;
}

.app-header h1 {
	font-size: 2.5rem;
	color: #667eea;
	margin: 0;
}

.app-main {
	max-width: 1000px;
	margin: 0 auto;
}
</style>
