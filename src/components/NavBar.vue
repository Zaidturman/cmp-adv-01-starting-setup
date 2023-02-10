<template>
  <header class="row" >
    <div class="text-center col-8 ">
    <ul class="nav row">
      <li v-for="page in pages" :key="page" class="nav-item col-2"><h5>{{ page }}</h5></li>
    </ul></div>
    <div class="col-4 ">
    <button type="button" class="btn btn-success position-relative float-end me-4">
  Messages <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">+{{ count }} <span class="visually-hidden">unread messages</span></span>
</button></div>
  </header>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{
          pages:['Home','About','Man','Woman'],
          count: 5
        }
    }
}
</script>

<style scoped>
header{
  padding: 0.8rem;
  background-color: #ffb703;
}
</style>