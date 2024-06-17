<script setup>
import HelloWorld from './components/HelloWorld.vue'

const handleImageClick = (e) => {
  console.log(e.target.data)
  console.log(wx)
  wx.previewImage({

  })
  // wx.chooseImage(1)
  // // alert(123)
  // wx.showMenuItems({
  //   menuList: [
  //     "share:appMessage"
  //   ] // 要显示的菜单项，所有menu项见附录3
  // });


  // console.log('hello world')
  // wx.previewImage({
  //   current: './assets/WechatIMG130.jpg', // 当前显示图片的http链接
  //   urls: ['./assets/WechatIMG130.jpg'] // 需要预览的图片http链接列表
  // });
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <img show-menu-by-longpress="true" src="./assets/WechatIMG130.jpg" style="width: 100%; height: auto;" class="logo vue" alt="Vue logo" @click="handleImageClick" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
