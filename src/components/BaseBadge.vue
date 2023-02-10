<template>
  <button class="badge" :class="classes">{{ caption }}</button>
</template>

<script>
export default {
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--bay': this.type === 'bay',
        'badge--add': this.type === 'add',
      };
    },
  },
};
</script>

<style>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #ccc;
  color: #ffffff;
}

.badge--bay {
  background-color: #810036;
  color: white;
}
.badge--bay:hover{
  background-color: #96013f;

}

.badge--add {
  background-color: #002c8a;
  color: white;
}
.badge--add:hover{
  background-color: #0235a3;

}
</style>