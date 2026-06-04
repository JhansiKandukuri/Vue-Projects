<script setup>
import {ref,computed} from 'vue';
const names = ref(['Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Edward',
  'Fiona',
  'George',
  'Hannah',
  'Isaac',
  'Julia',
  'Kevin',
  'Laura',
  'Michael',
  'Nicole',
  'Oscar',
  'Patricia',
  'Quinn',
  'Rachel',
  'Samuel',
  'Tiffany']);
const searchQuery = ref('');
const filteredNames = computed(() => {
  return names.value.filter(name => 
    name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
});
</script>
<template>
    <div class=" row card">
        <div class="card-header">
            Filter Names
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="nameInput" placeholder="Alice" v-model="searchQuery">
            </div>
            <h5 class="card-title">Filtered Names</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="name in filteredNames" :key="name">{{ name }}</li>
            </ul>
        </div>
    </div>
</template>

<style></style>