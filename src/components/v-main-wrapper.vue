<script>
import vNavigationMenu from './v-navigation-menu.vue';
import vTopMenu from './v-top-menu.vue';
import vProductsVue from './products/v-products.vue';

export default {
    components: {
        vNavigationMenu,
        vTopMenu,
        vProductsVue
    }
}
</script>

<template>
    <div class="v-main-wrapper">
        <vTopMenu/>
         <router-view/>
         <div class="container-v-main-wrapper">
            <vProductsVue/>
            <vProductsVue/>
            <vProductsVue/>
            <vProductsVue/>
         </div>
        <vNavigationMenu/>
    </div>
</template>

<style>
.v-main-wrapper {
  position: relative;
  /* Задає відступи для контейнера від країв вікна браузера */
  padding-top: 100px;
  padding-left: 250px;
}
.container-v-main-wrapper {
  position: relative;
  /* Відступи від бокового меню і верхнього меню */
  margin-top: 80px;
  margin-left: 80px;
}
</style>