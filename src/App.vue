<template>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  overflow-y: hidden;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.ttf') format('truetype');
}
.my-icon {
  font-family: 'iconfont';
}
.my-icon-extra::before {
  content: '&#xe7d9';
}

</style>
