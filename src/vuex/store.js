import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
      return {
        products: [],
        orders: [],
      };
    },
    mutations: {
      SET_PRODUCT_TO_STATE: (state, products) => {
        state.products = products;
      }
    },
    actions: {
      GET_PRODUCTS_FROM_API({ commit }) {
        return axios
          .get("https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/products.json")
          .then((products) => {
            commit("SET_PRODUCT_TO_STATE", products.data);
            console.log(products.data)
            return products;
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
      } 
    },
    getters: {
      PRODUCTS(state) {
        return state.products;
      }
    }
  });