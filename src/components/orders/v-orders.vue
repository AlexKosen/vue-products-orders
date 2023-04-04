<script>
import vOrdersItem from "./v-ordersItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vOrdersItem,
  },
  data() {
    return {
      className: "order-item",
      isShow: false,
      isShowOrderArrow: false
    };
  },
  methods: {
    ...mapActions(["GET_ORDERS_FROM_API"]),

    showInfoProduct() {
      this.className = "order-item-shirt";
      this.isShow = true;
    },
    deleteShowInfoProduct() {
      this.className = "order-item"
      this.isShow = false;
      this.isShowOrderArrow = false
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
    <div class="container-item">
      <div :class="className">
        <vOrdersItem
          v-for="item in ORDERS"
          :key="item.id"
          :order_item="item"
          :isShow="isShow"
          :isShowOrderArrow="isShowOrderArrow"
          @showInfo="showInfoProduct"
        />
      </div>

      <div class="order-item-container-product-info" v-show="isShow">
        <div
          class="order-item-container-btn-cancel"
          @click="deleteShowInfoProduct"
        >
          <i class="material-icons">cancel</i>
        </div>
        <div class="order-item-container-header">
          <div class="order-item-container-product-title">
            Длинное название прихода
          </div>
          <div class="order-item-container-product-icon">
            <i class="material-icons">add_circle_outline</i>
            <p>Добавить продукт</p>
          </div>
        </div>
        <div class="order-item-container-product">
          <div>i</div>
          <div>img</div>
          <div>Название продукта</div>
          <div>Свободен</div>
          <div><span class="material-icons"> delete </span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
.container-item {
  display: flex;
  align-items: flex-start;
}

.order-item {
  width: 90%;
}
.order-item-shirt {
  width: 35%;
}
.order-item-container-product-info {
  display: flex;
  flex-direction: column;
  width: 45%;
  position: relative;
  margin-left: 10px;
  border: 1px solid #ccc;
}
.order-item-container-btn-cancel {
  position: absolute;
  top: -13px;
  right: -13px;
  color: grey;
}
.order-item-container-header {
  display: flex;
  flex-direction: column;
}
.order-item-container-product-icon {
  display: flex;
  text-align: center;
  color: rgb(9, 216, 9);
}
.order-item-container-product {
  display: flex;
  justify-content: space-between;
}
</style>
