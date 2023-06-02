<template>
  <NavbarComponent></NavbarComponent>
  <main>
    <router-view></router-view>
    <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-xxx">Dark</button>
    <p class="text-xxx">123</p>
    <h3 class="test-wahaha">ㄏ哈哈哈哈哈哈</h3>
    <p class="fs-1">測試用</p>
    <h1 class="mb-6">標題</h1> -->
  </main>
  <footer class="py-6 bg-black">
    <div class="container">
      <div class="row">
        <div class="col-6">
           <div class="d-flex flex-column align-items-start">
             <router-link class="nav-link text-primary p-1 mb-1 d-inline-block" to="/">
              <img src="/Logo.png" alt="" style="width: 60px" />
            </router-link>
            <a href="tel:080000000" class="d-inline-block p-1 mb-1">電話：080000000</a>
            <a href="mailto:123@practice.com" class="d-inline-block p-1 mb-1">123@practice.com</a>
           </div>
        </div>
        <div class="col-6 text-end">
          <a href="#" class="d-inline-block"><i class="bi bi-facebook text-primary fs-5"></i></a>
          <a href="#" class="d-inline-block ms-3">
             <i class="bi bi-instagram text-primary fs-5"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import cartStore from '../stores/cartStore';
import{ mapActions } from 'pinia';
export default {
  components: {
    NavbarComponent
  },
  methods:{
    ...mapActions(cartStore,['getCartList'])
  },
  mounted(){
    this.getCartList();
  }
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 53px;
}
</style>
