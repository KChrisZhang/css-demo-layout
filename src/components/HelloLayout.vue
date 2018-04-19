<template>
  <div id="hello-layout">
    <div class="parent">
      <div class="child"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloAsync',
  data () {
    return {}
  },
  mounted () {
    console.log('HelloLayout[component]')
  }
}
</script>

<style lang="scss">
#hello-layout {
  margin: 0;
  padding: 0;

  .parent {
    width: 80%;
    height: 300px;
    margin: 0 auto;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    .child {
      width: 80%;
      height: 200px;
      background-color: pink;
    }
  }
}
</style>
