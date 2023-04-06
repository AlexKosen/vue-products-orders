<script>
export default {
  props: {
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "ok",
    },
  },

  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },

  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup_wrapper"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="the-popup">
      <div class="the-popup__header">
        <span>{{ popupTitle }}</span>
        <span class="material-icons" @click="closePopup"> close </span>
      </div>
      <div class="the-popup__content"></div>
      <slot></slot>
      <div class="the-popup__footer">
        <button class="close-modal btn" @click="closePopup">Close</button>
        <button class="sabmit_btn btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.the-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sabmit_btn {
    padding: 8px;
    color: #ffffff;
    background-color: forestgreen;
  }
  .close-modal {
    padding: 8px;
    color: #ffffff;
    background: red;
  }
}
</style>
