<script>
import vProductsItemVue from './v-productsItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    vProductsItemVue
  },
  computed: {
    ...mapGetters([
      "PRODUCTS"
    ])
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API"
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API() 
  }
};
</script>

<template>
    <div class="product-select">
      <div class="product-select-name">Продукты / 20</div>
      <div class="product-select-type">Тип</div>
      <!-- <select v-model="selectedType"></select>
      <option value="">Всі типи</option> -->
      <!-- <option v-for="type in productTypes" :value="type">{{ type }}</option>
      </select>
      <ul>
      <li v-for="product in filteredProducts">{{ product.name }}</li>
      </ul> -->
  </div>
  <vProductsItemVue
  v-for="product in PRODUCTS"
  :key="product.id"
  :product_info="product"
  />

</template>

<style>
.product-select {
  display: flex;
  justify-content: flex-start;
  text-align: center;
}
</style>
