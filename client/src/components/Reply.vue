<template>
  <div class="card text-black bg-light mx-3 my-3 col-3 p-0 shadow" style="max-width: 18rem">
    <div class="card-header">Total vote: 0</div>
    <div class="card-body">
      <h5 class="card-title mb-3"><strong>{{item.title}}</strong></h5>
      <p
        class="card-text mb-3 "
      >{{item.description}}</p>
      <a href="#" class="btn btn-success btn-sm">
        <i class="fas fa-chevron-up"></i>
      </a>
      <a href="#" class="btn btn-danger ml-2 btn-sm ">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
   name : `Reply`,
   data () {
      return {

      }
   },
   props : ['item']
};
</script>

<style>
</style>