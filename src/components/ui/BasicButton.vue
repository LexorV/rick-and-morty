<!-- кнопке можно через пропсы width и height передать нужную ширину и длину. Или она будет просто 200 на 68 -->
<template>
  <button
    :type="type"
    :disabled="disabled "
    :style="cssVars"
    class="button"
    @click="click"
    @click.stop="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    text: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    },
    backgroundColor: {
      type: String,
      default: 'blue'
    },
    colorText: {
      type: String,
      default: 'white'
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    click: {
      type: Function,
      default: () => {}
    }

  },
  computed: {
    cssVars () {
      return {
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--backgroundColor': this.backgroundColor,
        '--colorText': this.colorText,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
    width: var(--width);
    height:  var(--height);
    display: inline-block;
    background-color: var(--backgroundColor);
    border: 1.2px solid #304244;
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
    transition: all ease .5s;
    font-weight: 400;
    font-size: 20px;
    color:  var(--colorText);
}
.button:active {
    transform: scale(.9);
}
.button:hover {
  opacity: 0.7;
}
@media screen and (max-width: 600px) {
  .button {
    width: 180px;
    height: 40px; 
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
}

</style>
