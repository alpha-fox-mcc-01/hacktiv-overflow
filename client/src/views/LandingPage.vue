<template>
  <div class="container mt-5">
    <div class="row">
      <div class="mb-5 col-md-3 col-lg-2">
        <div class="list-group">

          <div class="list-group-item list-group-item-warning">
            <router-link :to="'/general'" style="text-decoration: none; color:black;">
              <div class="fa-btn">
                All
              </div>
            </router-link>
          </div>

          <div class="list-group-item">
            <router-link :to="'/js'" style="text-decoration: none; color:black;">
              <div class="fa-btn">
                js
              </div>
            </router-link>
          </div>

        </div>
      </div>

      <div class="col-md-9 col-lg-10">
        <div class="px-3">
          <router-view />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
