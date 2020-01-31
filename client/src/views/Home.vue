<template>
  <div id='home'>
    <Featured />
    <div class='row'>
      <RecentDiscussions />
      <TagsList />
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/TagsList.vue'
import RecentDiscussions from '@/components/RecentDiscussions.vue'
import Featured from '@/components/Featured.vue'
export default {
  components: {
    Featured,
    RecentDiscussions,
    TagsList
  },
  created () {
    this.$store.dispatch('getQuestions')
  }
}
</script>
<style scoped>
.row {
  width: 100rem;
  /* margin-left: auto; */
  margin-left: auto;
  margin-right: auto;
}
</style>
