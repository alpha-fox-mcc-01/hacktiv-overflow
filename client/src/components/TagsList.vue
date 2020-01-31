<template>
  <div class='col-md-4' id='tags-list'>
    <div style='margin-left: 5rem;'>
      <h1>Browse Tags</h1><br>
      <ul style='height: 30rem; overflow-y: auto;'>
      <li v-for='(tag, i) in tags' :key='i'><p>{{ tag }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags () {
      return this.$store.state.tags.filter(tag => tag != null)
    }
  },
  created () {
    this.$store.dispatch('getTags')
  }
}
</script>

<style>
li {
  opacity: 0.7;
  cursor: pointer;
}
li:hover {
  opacity: 1.2;
}
</style>
