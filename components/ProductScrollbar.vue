<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(banner, idx) in banners" :key="idx" class="swiper-slide">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {},
          tap() {}
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('banners update')
    }, 3000)
    this.mySwiper.slideTo(3)
  }
}
</script>

<style>
.my-swiper {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination > .swiper-pagination-bullet {
  background-color: red;
}
</style>
