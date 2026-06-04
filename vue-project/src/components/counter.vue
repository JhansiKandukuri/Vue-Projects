<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
<div class="row card">
  <div class="card-header">
    Counter
  </div>
  <div class="card-body">
    <h5 class="card-title">Play with Counter</h5>
    <p class="card-text">You can use the counter to update the value.</p>
    <p class="card-text">Current value: {{ count }}</p>
    <div class='counter-buttons'>
        <button class="btn btn-primary" @click="count<10 ? count++ : null">Increase</button>
        <button class="btn btn-secondary" @click="count>0 ? count-- : null">Decrease</button>
    </div>
  </div>
</div>
    
</template>

<style>
.counter-buttons {
    display: flex;
    justify-content: space-around;
    gap: 12px;
}
.card-header {
    background-color: #0a58ca;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
}
</style>