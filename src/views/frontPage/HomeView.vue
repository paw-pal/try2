<template>
  <section
    class="banner position-relative"
    style="background-image: url(/frontPage/index-banner.jpg)"
  >
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-md-5 col-xl-3 offset-md-3 offset-lg-6">
          <div class="text-center text-md-end position-relative z-index-1">
            <h1 class="fs-2 mb-5">我的樣子由我決定</h1>
            <router-link to="/products" class="btn btn-primary text-white">選購商品</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-lace best-selling bg-primaryLight pt-10">
    <div class="container">
      <div class="row">
        <h3 class="title fs-3 text-center">明星商品</h3>
        <div class="col-md-4" v-for="product in sortUserProducts" :key="product.id">
          <CardComponent :product="product"></CardComponent>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10 container">
    <h3 class="title2 fs-3">新品上市</h3>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <swiper
          :modules="modules"
          :navigation="navigation"
          :loop="true"
          :speed="800"
          :pagination="{
            clickable: true
          }"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
        >
          <swiper-slide>
            <img src="/frontPage/NewProduct-beautyblender.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="/frontPage/NewProduct-blush.png" alt="" />
          </swiper-slide>
          <div class="swiper-button-prev"><i class="bi bi-chevron-left fs-2 text-primary"></i></div>
          <div class="swiper-button-next">
            <i class="bi bi-chevron-right fs-2 text-primary"></i>
          </div>
          <div class="swiper-pagination">1</div>
        </swiper>
      </div>
    </div>
  </section>
  <section class="section-lace productCategory position-relative py-10 bg-primary">
    <h3 class="title fs-3 text-center">商品分類</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-base.png) no-repeat center / 90px 188px;
            "
          >
           <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('底妝')"></a>
            <h3 class="text-white text-center position-relative z-index-1">底妝</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-eyebrow.png) no-repeat center / 180px;
            "
          >
         <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('眉彩')"></a>
            <h3 class="text-white text-center position-relative z-index-1">眉彩</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-eyes.png) no-repeat center / 161px 94px;
            "
          >
           <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('眼彩')"></a>
            <h3 class="text-white text-center position-relative z-index-1">眼彩</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-cheek.png) no-repeat center / 89px 189px;
            "
          >
           <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('頰彩')"></a>
            <h3 class="text-white text-center position-relative z-index-1">頰彩</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-lip.png) no-repeat center / 51px 179px;
            "
          >
          <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('唇彩')"></a>
            <h3 class="text-white text-center position-relative z-index-1">唇彩</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
        <div class="col-8 col-sm-6 col-lg-4">
          <div
            class="categoryItem rounded-circle position-relative overflow-hidden mb-5"
            style="
              background: #fff url(/frontPage/icon-cosmetic-brush.png) no-repeat center / 34px 179px;
            "
          >
          <a to="/products" class="position-absolute w-100 h-100 cursor-pointer z-index-2" @click.prevent="gotoProducts('刷具')"></a>
            <h3 class="text-white text-center position-relative z-index-1">刷具</h3>
            <!-- <img src="/frontPage/icon-cosmetic-base.png" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="subscribeNews py-10 position-relative"
    style="background: url(/frontPage/bg-subscribeNews.jpg) center / cover"
  >
    <div class="container position-relative z-index-2">
      <h3 class="title2 text-white">訂閱電子報</h3>
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="input-group mb-3">
            <form class="d-flex w-100">
              <input
                type="text"
                class="form-control fs-4 rounded-0 rounded-start"
                placeholder="請輸入信箱"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                class="input-group-text btn btn-primary rounded-0 rounded-end px-4 px-md-6"
                id="basic-addon2"
              >
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from '../../components/CardComponent.vue';
import userAllProducts from '../../stores/userAllProducts';

import { mapActions, mapState } from 'pinia';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  data() {
    return {
      test: '123',
      modules: [Autoplay, Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
  },
  components: {
    CardComponent,
    Swiper,
    SwiperSlide
  },
  methods: {
    gotoProducts(category){
      console.log(category);
     
      this.$router.push(`/products?category=${category}`);
    },
    ...mapActions(userAllProducts, ['getUserAllProducts'])
  },
  computed: {
    ...mapState(userAllProducts, ['sortUserProducts'])
  },
  mounted() {
    this.getUserAllProducts('sort', 'recommend');
  }
};
</script>

<style lang="scss" scoped>
// .banner {
//   height: 400px;
//   background-position: center;
//   background-size: cover;
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.3);
//   }
//   @media screen and (min-width: 767px) {
//     height: 549px;
//     background-position: center -200px;
//     background-size: unset;
//   }
// }
h1{
  @include pad() {
    color: blue;
  }
}

.best-selling {
  .title::before {
    background-image: url(/titleDecoration1-left.png);
  }
  .title::after {
    background-image: url(/titleDecoration1-left.png);
  }
  &::after {
    background-image: url(/lace-2.png);
    background-size: 52px 23px;
  }
}

.swiper {
  height: 300px;
  @media screen and (min-width: 767px) {
    height: 567px;
  }
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: '';
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  background-size: contain;
  top: 0px;
}
.swiper-button-next:after {
  //   background-image: url(/titleDecoration2.png);
  right: 0px;
}
.swiper-button-prev:after {
  //   background-image: url(/titleDecoration2.png);
  left: 0;
}

// .swiper-pagination-bullet-active{
//     background-color: pink;
// }

.productCategory {
  .title::before {
    background-image: url(/titleDecoration1-left.png);
  }
  .title::after {
    background-image: url(/titleDecoration1-left.png);
  }
  &::after {
    height: 50px;
    top: 0;
    background-image: url(/lace-3.png);
    background-size: 636px 50px;
  }

  .categoryItem {
    width: 267px;
    height: 267px;

    // img{
    //     display: inline-block;
    //     width: 150px;
    //     height: 150px;
    //     object-fit: contain;
    // }
    h3 {
      line-height: 267px;
      top: -200px;
      transition: 0.6s;
    }
    &::before {
      content: '';
      position: absolute;
      top: -267px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 0;
      transition: 0.3s;
    }
    &:hover h3 {
      top: 0;
    }
    &:hover::before {
      top: 0;
    }
  }
}

.subscribeNews {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
