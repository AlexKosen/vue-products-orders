<script>
import vOrdersItem from './v-ordersItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        vOrdersItem,
    },
    methods: {
        ...mapActions(["GET_ORDERS_FROM_API"])
    },
    computed: {
        ...mapGetters(["ORDERS"])
    },
    mounted() {
        this.GET_ORDERS_FROM_API()
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
    <vOrdersItem
    v-for="item in ORDERS"
    :key="item.id"
    :order_item = item
    />
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

</style>
