<template>
  <div class="product-swiper">
    <div class="product-swiper-header">
      <div class="product-swiper-title">
        <h3>
          Pastas
        </h3>
      </div>
      <div class="product-more">
        <el-button size="small">
          <span>Ver mas</span>
          <i class="el-icon-arrow-right" />
        </el-button>
      </div>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(banner, idx) in banners" :key="idx" class="swiper-slide product-info">
          <div class="product-img">
            <div class="content-img">
              <img :src="banner" />
            </div>
          </div>
          <div class="product-detail">
            <p class="product-savings">Savings</p>
            <p class="product-price">$ 138.09</p>
            <p class="product-name">Cerveza Brahma Chopper</p>
            <p class="product-description">Cerveza Braham Chopp Lata 473 Unidades</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev" />
      <div class="swiper-button-next" slot="button-next" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp',
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp',
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp',
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp',
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp',
        'https://images.rappi.com.ar/products/423949-1552669350093.png?d=200x200&e=webp'
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
.product-swiper {
  padding: 10px;
  background-color: white !important;
}

.product-swiper-header {
  margin: 10px 0px 20px 10px;
  display: flex;
  align-items: center;
}

.product-swiper-header .product-swiper-title {
  margin-right: 20px;
}

.product-info {
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 205px !important;
}

.product-info .product-img {
  padding: 0 25px 20px;
  height: 168px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  margin-top: 25px;
  position: relative;
}

.product-info .product-img img {
  max-height: 140px;
}

.product-info .product-img {
  position: relative;
  width: 100%;
}

.product-info .product-detail {
  margin-top: 10px;
  font-size: 1rem;
  text-align: left;
}

.product-info .product-detail .product-savings {
  font-weight: 600;
  font-size: 10px;
  color: red;
}

.product-info .product-detail .product-price {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 3px;
}

.product-info .product-detail .product-name {
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}

.product-info .product-detail .product-description {
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  color: #7d7d7d;
}

.my-swiper {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination > .swiper-pagination-bullet {
  background-color: red;
}
</style>
