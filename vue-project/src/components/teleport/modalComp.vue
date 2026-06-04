<script setup>

</script>

<template>
    <div class=" row card">
        <div class="card-header">
            Modal Example
        </div>
        <div class="card-body">
            <h5 class="card-title">Modal Example</h5>
            <p class="card-text">This is a simple modal example using Vue's teleport feature.</p>
            <button class="btn btn-primary" @click="$emit('close')">Close Modal</button>
        </div>
    </div>
</template>

<style>

</style>
