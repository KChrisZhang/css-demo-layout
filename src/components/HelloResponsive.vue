<template>
  <div id="hello-responsive">
    <aside class="fixed-aside">
      <ul>
        <li class="list-item" v-for="item in list" :key="item.index"></li>
      </ul>
    </aside>
    <section class="main"></section>
  </div>
</template>

<script>
export default {
  name: 'HelloResponsive',
  data () {
    return {
      msg: '',
      list: [1, 2, 3, 4, 5]
    }
  },
  mounted () {
    console.log('HelloResponsive [Component]')
  }
}
</script>

<style lang="scss" scoped>
// 四种适配类型：手机、平板、笔记本、台式电脑
#hello-responsive {
  display: flex;

  width: 80%;
  height: 1500px;
  margin: 0 auto;
  background-color: #fff;

  .fixed-aside {
    width: 300px;
    height: 100%;
    margin-right: 20px;
    background-color: orange;
    overflow: hidden;
  }

  .main {
    flex: 1;
    height: 100%;
    background-color: pink;
    overflow: hidden;
  }

  .list-item {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    background-color: red;
  }
}

@media (min-width: 1366px) {
  #hello-responsive {
    width: 1200px;
  }
}

@media (max-width: 1366px) {
  #hello-responsive {

  }
}

@media (max-width: 800px) {
  #hello-responsive {
    width: calc(100% - 40px * 2);
    margin: 0 40px;

    .fixed-aside {
      width: 200px;
    }

    .list-item {
      height: 200px;
    }
  }
}

@media (max-width: 450px) {
  #hello-responsive {
    width: calc(100% - 20px * 2);
    margin: 0 20px;

    .fixed-aside {
      width: 100px;
      margin-right: 10px;
    }

    .list-item {
      height: 100px;
      margin-bottom: 10px;
    }
  }
}

</style>
