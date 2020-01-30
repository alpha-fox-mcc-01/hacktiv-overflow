<template>
  <div>
  <b-card :header="Question.title" header-bg-variant="primary" header-text-variant="white" :sub-title="Question.username">
    <b-card-text>
      {{Question.question}}
    </b-card-text>

    <a href="#" class="card-link">Reply</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</div>
</template>

<script>
export default {
  props: {
    Question: Object
  }
}
</script>

<style>

</style>
