<template>
  <div>
    <TheSidebar/>
    <NavBar/>
    <BadgeView/>
   
   
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import TheSidebar from './components/TheSidebar.vue';
import BadgeView from './view/BadgeView.vue';
export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components:{
    NavBar,
    TheSidebar,
    BadgeView
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>