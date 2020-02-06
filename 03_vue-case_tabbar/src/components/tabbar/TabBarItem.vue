<template>
<!--  在使用插槽时在外面包一层div元素,在这里面定义自己的类或者各种方法-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'palevioletred'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        //利用当前活跃的路由与当前link存入的数值进行比较,有则当前控件为活跃
        return this.$route.path.indexOf(this.link) !== -1;
      },
      //通过计算属性，动态绑定元素的style
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active {
    color: palevioletred;
  }
</style>
