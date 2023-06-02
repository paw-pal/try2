<template>
  <div class="container">
    <section class="py-10">
      <div class="row flex-column flex-md-row">
        <div class="col-md-5">
          <div class="product-mainImg mb-5">
            <img :src="mainImg" alt="" />
          </div>
          <Swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :modules="modules"
            class="mySwiper product-swiper"
          >
            <SwiperSlide v-for="(item, i) in product.imagesUrl" :key="i + 1" @click="setImg(item)">
              <img :src="item" alt="" class="product-imgs" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="col-md-7">
          <h2 class="mt-5 mb-5 mb-md-10">{{ product.title }}</h2>
          <p class="fs-5 mb-10 product-description">{{ product.description }}</p>
          <p class="fs-5 mb-6">
            NT ${{ product.price }}
            <del class="fs-6 ms-2 text-gray"> NT ${{ product.origin_price }}</del>
          </p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="d-grid mt-4">
            <button class="btn btn-primary py-3" type="button">加入購物車</button>
          </div>
        </div>
      </div>

      <!-- <div>
        <img :src="mainImg" alt="" style="width: 200px" />
      </div>
      <Swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        class="mySwiper TestSwiper"
      >
        <SwiperSlide v-for="(item, i) in product.imagesUrl" :key="i + 1" @click="setImg(item)">
          <img :src="item" alt="" style="width: 200px" />
        </SwiperSlide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </Swiper> -->
    </section>
    <section class="pt-6 pb-10">
      <ul class="nav nav-tabs justify-content-center border-primary mb-3" id="myTab">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click.prevent="tabActive='notify'">購物須知</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="tabActive='delivery'">運送及付款方式</a>
        </li>
      </ul>
      <div>
        <template v-if="tabActive==='notify'">
          <ul>
            <li class="mb-3">
              訂單成立後即無法修改，若有修改需求請重新下訂單。
            </li>
            <li class="mb-3">
              商品顏色僅供參考，色彩呈現會因電腦螢幕設定不同而有誤差，顏色以實際商品為主。
            </li>
            <li class="mb-3">
              易肌膚過敏者，請先塗於手臂上做測試再行使用。
            </li>
            <li class="mb-3">
              使用後若有皮膚紅腫不適，請立即停用，並盡速就醫。
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="p-0 ps-md-5">
            <li>付款方式
              <ul>
                <li>
                  <p>信用卡付款</p>
                  <p>可使用VISA、MASTERCARD、JCB等類型的信用卡付款。</p>
                </li>
                <li>
                  <p>ATM轉帳</p>
                  <p>本站使用WebATM虛擬帳號繳費，並可依照您的銀行別做選擇，提供您最多元的消費選擇。</p>
                </li>
                <li>
                  <p>超商條碼</p>
                  <p>選擇超商條碼繳費者，待訂單成立後，請列印「便利商店繳費電子帳單」，並攜至超商繳款即可。</p>
                </li>
                <li>
                  <p>超商代碼</p>
                  <p>訂單成立，請將「超商繳款代碼」記下並前往超商多媒體事務機操作列印。</p>
                </li>
              </ul>
            </li>
            <li>運送方式
              <ul>
                <li>
                  <p>可選擇超商取貨、郵寄或黑貓物流。 </p>
                </li>
                <li>
                   <p>宅配寄送限台灣本島各縣市(不含郵政信箱)。  </p>
                </li>
                <li>
                   <p>貨運宅配出貨後，約2-3個工作日送達指定地址。  </p>
                </li>
                <li>
                  <p>上述配送時間如遇特殊狀況(例如：天災影響、物流公司配送錯誤、過年春節等等)本店會盡快處理，讓貨物能盡速抵達，若有不便， 請多見諒。  </p>
                </li>
              </ul>
            </li>
          </ul>
        </template>
      </div>
    </section>
  </div>

  <!-- {{product.title}}
    <img :src="product.imageUrl" :alt="product.title"> -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import * as bootstrap from 'bootstrap';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      modules: [FreeMode, Navigation, Pagination],
      mainImg: '',
      tabActive:'notify'
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    setImg(url) {
      this.mainImg = url;
    }
  },
  mounted() {
    //console.log(this.$route.params.id);
    const { id } = this.$route.params;
    this.$http
      .get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        console.log(res);
        this.product = res.data.product;
        console.log(this.product);
        this.mainImg = this.product?.imagesUrl[0];
      })
      .catch((err) => {
        console.log(err);
      });

    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl);

      triggerEl.addEventListener('click', function (event) {
        event.preventDefault();
        tabTrigger.show();
      });
    });
  }
};
</script>
<style lang="scss" scoped>

.product-mainImg {
  height: 300px;
   @media screen and (min-width: 767px) {
    height: 450px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.swiper-wrapper{
  justify-content: center;
  background-color: #000;
}

.swiper-slide{
  margin-right: 10px !important;
   @media screen and (min-width: 767px) {
    margin-right: 30px !important;
  }
}

.product-swiper {
  height: 100px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-description {
  white-space: pre-wrap;
}

.nav-link.active{
  background: #F19DB5;
  color: #fff;
}

.nav-link:hover{
  border-color: #FADCE2;
}
</style>
