<script>
import vOrdersItem from "./v-ordersItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vOrdersItem,
  },
  data() {
    return {
      className: 'order-item',
      isShow: false
    }
  },
  methods: {
    ...mapActions(["GET_ORDERS_FROM_API"]),

    showInfoProduct() {
      this.className = 'order-item-info-product'
      this.isShow = true
    }
  },
  computed: {
    ...mapGetters(["ORDERS"]),
  },
  mounted() {
    this.GET_ORDERS_FROM_API();
  },
};
</script>

<template>
  <div class="order-wrapper">
    <div class="order-header">
      <div class="order-icon-add">
        <i class="material-icons">add_circle_outline</i>
      </div>
      <div class="order-title">Приходы/ {{ ORDERS.length }}</div>
    </div>
    <div 
    :class="className">
      <vOrdersItem v-for="item in ORDERS" 
      :key="item.id" 
      :order_item="item" 
      :isShow="isShow"
      @showInfo="showInfoProduct"/>
    </div>
  </div>
</template>

<style>
.order-header {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
}
.order-icon-add {
  margin-right: 15px;
}
.order-title {
  font-weight: 600;
  font-size: 18px;
}
.order-item {
  width: 90%;
}
.order-item-info-product {
  width: 90%;

}
</style>
