<template>

<div class="row">
    <BadgeList class="col-3"/>
    <BadgeList class="col-3"/>
    <BadgeList class="col-3"/>
    <BadgeList class="col-3"/>
    <BadgeList class="col-3"/>

</div>
</template>
<script>

import BadgeList from '../components/BadgeList.vue';
export default {
    name: 'BadgeView',
    components:{
        BadgeList
    },
}


</script>
<style>
</style>