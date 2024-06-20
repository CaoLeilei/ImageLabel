<script setup>
import HelloWorld from './components/HelloWorld.vue'

const handleImageClick = (e) => {
  console.log()
  // console.log(wx)
  const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoQAAAAoCAYAAABn9uvzAAACjElEQVR4nO3dMUocURzH8d+LVnY2ASFYmgOIB1DQWsgttLHyEKlShNxCsFaIBxAPEEsDQtKkTALCC0NGhJDVnQcJs87n064ss/6n+PKY96bUWj8neRUAAKbo5wtjBwCYNkEIADBxghAAYOIEIQDAxAlCAICJE4QAABPXHTuzlGQlyVqS9SS7SfaTbEz9nwMA8MxcJzlNcp7kJsltkh9l1m+ste4keZtk050AALDQrpIcl1I+/u1HzAzC/I7C7vODJO+SLLsPAAAWyl2SoyQfSil11oU/GoT3aq3bSU6SrLoHAAAWwrckb0opF09d7FxBmIcoPLNSCAAwet3K4N48MZghu4z7LzwyfwCA0TuaNwYzZIUwD88UXtpoAgAwWt0Gkq3Hnhn806BzCPsvPjZ/AIDROh4Sgxm6Qniv1vrJOYUAAKNzXUp5PfSiWt9Ucmr+AACj09RorUF4bv4AAKPT1GitQXhj/gAAo9PUaK1BeGv+AACj09RorUHYtBkFAIB/qqnRWoNwzSwBAEanqdFag3Dd/AEARqep0VqDcNf8AQBGp6nRHEwNAPB8/J+DqWutO2IQAGCUNvpWG2TQCmGttfv7yySb7gEAgFG6SrI15H3GQ1cID8UgAMCoda12MOQC514hrLVuJzlLsuweAAAYtbske6WUi3kucq4Vwj4GT8QgAMBC6JrtpG+4Jz0ahN0zg7XWw35lcNX8AQAWRtduZ13L9ftAZpoZhP0OlW4DyXsrgwAAC2m5b7nLx3YfdyuAS0lW+ledrPcHGu47WgYA4Nm5TnKa5DzJTZLbJN+7IPyS5KV5AwBM0tfWV9cBAPBMCEIAgIkThAAAEycIAQAmThACAEycIAQAmLIkvwCve4VdX8g7iQAAAABJRU5ErkJggg=='
  const imgPath = 'test_img'
  // console.log(wx)
  // const fs = wx.getFileSystemManager()
  // fs.writeFileSync(imgPath, img, 'base64')
  // fs.close
  wx.previewImage({
    current: img,
    //所有图片
    success: () => {
      alert(123123)
    },
    fail: (err) => {
      alert(JSON.stringify(err))
    },
    complete: () => {
      alert('complete')
    }
    // failed" ()
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
    <img
      show-menu-by-longpress="true"
      src="./assets/WechatIMG130.jpg"
      style="width: 100%; height:
      auto;"
      class="logo vue"
      alt="Vue logo"
      @click="handleImageClick"
    />
  </div>
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
