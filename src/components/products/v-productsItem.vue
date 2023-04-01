<script>
export default {
  props: {
    product_info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      
    }
  },
  methods: {

  },

  computed: {
    formattedDateOrder() {
      const dateParts = this.product_info.date.split(' ')[0].split('-');
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    },
    formDateGuaranteStart() {
      const dateParts = this.product_info.guarantee.start.split(' ')[0].split('-');
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    },
    formDateGuaranteEnd() {
      const dateParts = this.product_info.guarantee.end.split(' ')[0].split('-');
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    }
  }
};
</script>
<template>
  <div class="product-item">
    <div class="status-icon" style="flex-basis:1%">
      <div class="circle"></div>
    </div>
    <div class="product-image" style="flex-basis: 5%">
      <span class="material-icons"> desktop_windows </span>
    </div>
    <div class="product-name" style="flex-basis: 15%">
      <p>{{ product_info.title }}</p>
    </div>
    <div class="serviceability" style="flex-basis:6%">Исправен</div>
    <div class="guarantee" style="flex-basis:6%">
      с {{ formDateGuaranteStart }} 
      по {{ formDateGuaranteEnd }}
    </div>
    <div class="condition" style="flex-basis: 6%">{{ product_info.isNew ? 'Новий' : 'Б/У' }}</div>
    <div class="price" style="flex-basis: 7%"
    v-for="(priceItem) in product_info.price" 
    :key="priceItem"
    >{{priceItem.value}} {{ priceItem.symbol }}
    </div>
    <div class="name-group-prodact" style="flex-basis: 15%">{{ product_info.type }}</div>
    <div class="autor-order" style="flex-basis: 12%">Автор прихода</div>
    <div class="name-order" style="flex-basis: 15%">Название прихода</div>
    <div class="order-date" style="flex-basis: 8%">{{ formattedDateOrder }}</div>
    <div class="delete-icon" style="flex-basis: 3%">
      <span class="material-icons"> delete </span>
    </div>
  </div>
</template>
<style>
.product-item {
  display: flex;
  justify-content: space-between;
  width: 95%;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  box-sizing: border-box;
}
.product-item div {
  display: flex;
  margin: 0 15px;
  align-items: center;
  box-sizing: border-box;
}
.status-icon {
  display: flex;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-name {
  box-sizing: border-box;
}
.circle {
  width: 10px;
  height: 10px;
  background: rgb(102, 255, 0);
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}
.serviceability {
  padding: 0 5px;
}
.material-icons:hover {
  cursor: pointer;
}
</style>
