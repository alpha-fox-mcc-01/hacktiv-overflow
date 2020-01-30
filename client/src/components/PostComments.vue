<template>
<div class="">
  <div class="mt-4 ml-5 card rounded-lg" :class="{'border-success': comment.markedAsAnswer }">
    <div class="card-body ">

      <div class="d-flex align-items-start">
        <div class="mr-2 d-flex flex-column justify-content-center align-items-center">
          <i class="fas fa-chevron-up fa-btn text-secondary"></i>
          <div class="card p-1 m-1">12</div>
          <i class="fas fa-chevron-down fa-btn text-secondary"></i>
        </div>

        <div>
          <div class="">
            <div v-html="comment.comment"></div>
            <small><p>by: {{comment.userId.name}}</p></small>
          </div>
          <hr class="my-1" v-if="comment.markedAsAnswer">
          <div class=""  v-if="comment.markedAsAnswer">
            <span>Marked as answer by OP</span><i class="ml-1 fas text-success fa-check mb-3"></i>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style>

</style>
