<template>
  <a id="case"></a>
  <div id="user-case" class="max-w-screen min-h-screen portrait:p-6 landscape:pt-36 landscape:pl-72 landscape:pr-12 text-white font-normal leading-8">
    <div class="portrait:text-3xl landscape:text-6xl text-shadow-xl pb-8">作品展示</div>

    <div class="pt-8">
      <div class="text-black font-bold text-xl">微自定</div>
      <div class="text-gray-700">微自定線上附帶下單鏈接的平臺，公司自有生産線，屬於你的加工廠。高分辨率的手機殼DIY印錶機，智能印刷。實現計算機數據輸出到機器上，直接把彩色圖案在你的物品上噴印。代理合作流程:客服1V1對接→申請成為代理→諮詢獲取資料 →開始出售→自行下單→完成 0加盟門檻、0代理費、0庫存</div>
      <a href="https://sketch.4family.co/" target="_blank">
        <img src="https://www.4family.co/images/weiziding.png" alt="">
      </a>
    </div>

    <div class="py-12">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        <template v-for="item in state.cases" :key="item.name">
          <a :href="item.href" :target="item.target" class="relative" rel="noopener">
            <img :src="`https://4family.co/${item.img}`" class="w-full" :alt="item.name">
            <div v-text="item.name"
              class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center lg:py-4"></div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  cases: [
    {
      name: "心福田承佛寶塔",
      img: "/images/xinfutian.jpg",
      href: "https://xinfutian.life/",
      target: "_blank",
    },
    {
      name: "文湖寶翠",
      img: "/images/web33.jpg",
      href: "https://www.bestwonhu.com/",
      target: "_blank",
    },
    {
      name: "ELBAMOTOR",
      img: "/images/web36.jpg",
      href: "https://www.elba-union.com/",
      target: "_blank",
    },
    {
      name: "麗晶診所",
      img: "/images/web23.jpg",
      href: "https://www.regentbeauty.com.tw/",
      target: "_blank",
    },
    {
      name: "研醫明美學",
      img: "/images/web24.jpg",
      href: "https://www.yanyim.com/",
      target: "_blank",
    },
    {
      name: "朱冠州皮膚科",
      img: "/images/web28.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "微笑特攻隊",
      img: "/images/web06.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "Iseeyou 摩力無限",
      img: "/images/web25.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "安泰眼科",
      img: "/images/web43.jpg",
      href: "http://www.entie.com.tw/",
      target: "_blank",
    },
    {
      name: "長青牙醫聯盟",
      img: "/images/web38.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "渔夫之宝",
      img: "/images/web17.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "英特有限公司",
      img: "/images/web55.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
    {
      name: "創業大道加盟",
      img: "/images/web60.jpg",
      href: "javascript: void(0)",
      target: "_self",
    },
  ],
})
</script>

<style scoped>
</style>
