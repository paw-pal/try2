<template>
  <section
    class="banner about-banner position-relative"
    style="background-image: url(/frontPage/about-banner.jpg)"
  >
    <div class="container h-100">
      <div class="d-flex h-100 align-items-center justify-content-center">
        <div class="text-center position-relative z-index-1">
          <img src="/Logo-text.png" alt="" style="width: 123px; height: 39px" class="mb-4" />
          <h4 class="text-white fs-2 mb-5">致力於讓你成為想像中的自己</h4>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="height: 380px">
          <img src="/frontPage/about-1.jpg" alt="" />
        </div>
        <div class="col-md-6">
          <div
            class="d-flex h-100 align-items-center justify-content-evenly justify-content-md-center"
          >
            <p class="fs-3">隱入人群? 獨樹一格?</p>
            <p class="fs-3 align-self-end mb-md-8 me-lg-8 text-primary">操之在你</p>
          </div>
        </div>
      </div>
      <div class="row about-reverseContent">
        <div class="col-md-6" style="height: 380px">
          <img src="/frontPage/about-2.jpg" alt="" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100 align-items-center justify-content-center">
            <p class="fs-3">有限的資源</p>
            <p class="fs-3 align-self-end mb-md-8 me-md-8">無限的搭配</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="about-banner2 position-relative"
    style="background-image: url(/frontPage/about-banner2.jpg)"
  >
    <div class="container h-100">
      <div class="d-flex h-100 align-items-center justify-content-center">
        <div class="text-center position-relative z-index-1">
          <div>
            <img src="/Logo-text.png" alt="" style="width: 123px; height: 39px" class="mb-4" />
            <h4 class="text-white fs-2 mb-5 d-inline-block">邀請你一起來妝點自己的每一天</h4>
          </div>
          <router-link to="/products" class="btn btn-primary text-white">選購商品</router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="container">
      <h3 class="title2 text-black">聯絡我們</h3>
      <div class="row about-reverseContent">
         <div class="col-md-6" style="height: 351px">
          <img src="/frontPage/about-store.jpg" alt="" />
        </div>
        <div class="col-md-5 offset-md-1">
          <div class="d-flex flex-column align-items-start">
            <a href="tel:080000000" class="d-block p-1 mb-1 fs-4 text-black">電話：080000000</a>
            <a href="mailto:123@practice.com" class="d-block p-1 mb-1 fs-4 text-black"
              >信箱：123@practice.com</a
            >
            <address class="fs-4">地址：台北市信義區市府路45 號</address>
            <p>服務時間：週一至週五 09:00~22:00</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-banner {
  background-repeat: no-repeat;
  //   background-position: -500px 0;
  // background-size: unset;
  @media screen and (min-width: 767px) {
    height: 549px;
    background-position: center top;
    background-size: cover;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-reverseContent {
  flex-direction: row;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
  }
}

.about-banner2 {
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: unset;
  @media screen and (min-width: 1200px) {
    height: 549px;
    background-position: left -231px;
  }
}
</style>
