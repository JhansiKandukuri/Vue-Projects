<script setup>
import { ref,watch } from 'vue'
import { useMouseTrack} from '../composables/mouseTrack.js';
const searchQuery = ref('')
const debounceTimeout = ref(null)
const searchInput = ref('')
const mouseTrack = useMouseTrack()

watch(searchQuery, (newValue) => {
if(debounceTimeout.value) {
    clearTimeout(debounceTimeout.value)
 }
 debounceTimeout.value = setTimeout(()=>{
    searchInput.value = newValue
 },500)

})
</script>
<template>
    <div class=" row card">
        <div class="card-header">
            Debouncing Example
        </div>
        <div class="card-body">
            
            <div class='search-box'>
                <label for="searchInput" class="form-label">Search:</label>
                <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery">
                <p>Typing: {{ searchQuery }}</p>
                <p>Debounced Input: {{ searchInput }}</p>
                <p>Mouse Position: X: {{ mouseTrack.x }}, Y: {{ mouseTrack.y }}</p>
            </div>
        </div>
    </div>
</template>

<style>

</style>