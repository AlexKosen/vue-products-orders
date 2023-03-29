import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
      return {
        products: [],
        orders: [],
      };
    },
    mutations: {},
    actions: {},
    getters: {}
  });