<script>
import vProductsItemVue from './v-productsItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    vProductsItemVue
  },
  data() {
    return {
      selectedType: '',
    }
  },
  computed: {
    ...mapGetters([
      "PRODUCTS"
    ]),
    types() {
      return [...new Set(this.PRODUCTS.map((product) => product.type))];
    },
    filteredProducts() {
      if (this.selectedType) {
        return this.PRODUCTS.filter((product) => product.type === this.selectedType);
      }
      return this.PRODUCTS;
    },
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
      <p class="product-select-name">Продукты / {{ PRODUCTS.length }}</p>
      <div class="product-select-type">Тип</div>
      <select v-model="selectedType">
        <option value="">Все типы продуктов</option>
        <option v-for="type in types" 
          :key="type" 
          :value="type"
          >{{ type }}
        </option>
      </select>
      
  </div>
  <vProductsItemVue
  v-for="product in filteredProducts"
  :key="product.id"
  :product_info="product"
  />

</template>

<style>
.product-select {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
}
.product-select-name {
  font-weight: 600;
  font-size: 18px;
}
.product-select-type {
  margin: 0 10px 0 20px;
}

</style>
