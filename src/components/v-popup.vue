<script>
export default {
  props: {
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
        <span>Вы уверенны что хотите удалить этот приход?</span>
        <i class="material-icons" @click="closePopup"> cancel </i>
      </div>
      <div class="the-popup__content"></div>
      <slot></slot>
      <div class="the-popup__footer">
        <button class="close-modal btn" @click="closePopup">Отменить</button>
        <button class="sabmit_btn btn" @click="rightBtnAction">
          Удалить
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
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content:flex-start;
    align-items: center;
  }
  .sabmit_btn {
    width: 90px;
    padding: 8px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    background-color:rgb(253, 81, 81);
    &:hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background:rgb(218, 154, 154);
      color: rgb(82, 82, 82);
  }
  }
  .close-modal {
    width: 90px;
    padding: 8px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    background: rgb(9, 216, 9);
    &:hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background: rgb(127, 212, 127);
      color: rgb(82, 82, 82);
  }
  }
}
.the-popup {
  &__header {
    font-weight: 500;
  }
  .material-icons {
  position: relative;
  top: -25px;
  right: -25px;
  color: grey;
}
}

  
</style>
