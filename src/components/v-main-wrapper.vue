<script>
import vNavigationMenu from './v-navigation-menu.vue';
import vTopMenu from './v-top-menu.vue';

export default {
    components: {
        vNavigationMenu,
        vTopMenu
    }
}
</script>

<template>
    <div class="v-main-wrapper">
        <vTopMenu/>
         <router-view/>
        <vNavigationMenu/>
    </div>
</template>

<style>
</style>