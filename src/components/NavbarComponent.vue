<template>
  <!-- <nav class="navbar-light bg-black p-0 position-relative z-index-2">
    <div class="container d-flex align-items-center justify-content-between">
      <router-link to="/">
        <img src="/Logo.png" alt="" style="width: 60px" />
      </router-link>

      <ul class="nav-bar d-md-flex bg-black m-0 ms-auto ps-0">
        <li class="my-2">
          <router-link class="nav-link text-primary px-3 py-2" to="/about">關於我們</router-link>
        </li>
        <li class="my-2">
          <router-link class="nav-link text-primary px-3 py-2" to="/products">產品列表</router-link>
        </li>
      </ul>
      <span class="text-primary ms-auto cursor-pointer d-block d-md-none">
        <i class="bi bi-list fs-2"></i>
      </span>

      <div class="d-flex">
        <router-link class="nav-link text-primary px-3" to="/cart">
          <i class="bi bi-cart"></i>
        </router-link>
        <router-link class="nav-link text-primary" to="/login">後台</router-link>
      </div>
    </div>
  </nav> -->
  <!-- 測試 -->
  <nav
    class="navbar navbar-expand-md navbar-light bg-light section-lace bg-black p-0 position-fixed w-100 z-index-3"
  > 
    <div class="container position-relative">
    
      <a class="navbar-brand" href="#">
        <router-link class="nav-link text-primary p-1" to="/">
          <img src="/Logo.png" alt="" style="width: 60px" />
        </router-link>
      </a>
      <button
        class="navbar-toggler border-0 ms-auto me-5 me-md-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="text-primary">
          <i class="bi bi-list fs-2"></i>
        </span>
      </button>
     
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav d-flex align-items-center w-100 me-8">
          <li class="nav-item"></li>
          <li class="nav-item ms-md-auto my-2">
            <router-link class="nav-link text-primary px-3" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item my-2">
            <router-link class="nav-link text-primary px-3" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item my-2">
            <router-link class="nav-link text-primary" to="/login">後台</router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-icon position-absolute  m-0  p-0">
        <li class="nav-item">
          <router-link class="nav-link text-primary px-2" to="/cart">
            <i class="bi bi-cart text-primary fs-5"></i>
            <span class="badge rounded-pill bg-danger position-absolute cartNum">{{carts.carts?.length}}</span>
          </router-link>
          
        </li>
      </ul>
      
    </div>
  </nav>
</template>

<script>
import cartStore from '../stores/cartStore';
import {mapState} from 'pinia';

export default {
  computed:{
    ...mapState(cartStore,['carts'])
  }
}
</script>

<style lang="scss" scoped>
.section-lace::after {
  bottom: -28px;
  background-image: url(/lace-navbar.png);
}

.navbar-icon{
  top: 25px;
  right: 0;
  transform: translateY(-50%);
  @media screen and (min-width: 767px) {
   top: 50%;
   
  }

  .cartNum{
    top: -5px;
    right: -5px;
  }
}

// .nav-bar {
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: -100px;
  
//   //text-align: center;
//   // &.dropdown {
//   //   padding-top: 20px;
//   //   top: 40px;
    
     
//   // }
//   @media screen and (min-width: 767px) {
//     //background-color: #000;
//     position: static;
//   }
// }

// .navbar-toggler:focus {
//   box-shadow: none;
// }
</style>
