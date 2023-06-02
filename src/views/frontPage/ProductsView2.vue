<template>
  <div class="container pt-10">
    <h3 class="title2 text-black position-fixed">商品列表</h3>
    <div class="row" style="margin-top: 66px">
      <div class="col-3 position-fixed vh-100" style="width: 270px">
        <ul class="nav flex-column text-center border border-2 border-primary rounded">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="filterProduct('all')"
              >全部商品</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('底妝')">底妝</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('眉彩')">眉彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('眼彩')">眼彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('頰彩')">頰彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('唇彩')">唇彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('刷具')">刷具</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct">刷具</a>
          </li>
        </ul>
      </div>
      <div class="col-9 offset-3">
        <div class="row">
          <div class="col-4" v-for="product in allProducts" :key="product.id">
            <CardComponent :product="product"></CardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="d-flex flex-wrap gap-3">
    <div v-for="product in products" :key="product.title" class="card" style="width: 18rem">
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <router-link :to="`product/${product.id}`" class="btn btn-primary">看產品</router-link>
      </div>
    </div>
  </div> -->
</template>
<script>
import CardComponent from '../../components/CardComponent.vue';
import userAllProducts from '../../stores/userAllProducts';
import { mapActions, mapState } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    CardComponent
  },
  methods: {
    // getProducts(){
    //   this.products=this.allProducts;
    //   console.log(this.products);
    // },
    // filterProduct(category) {
    //   console.log(category);
    //   this.getUserAllProducts('sort', category);
    // },
    ...mapActions(userAllProducts, ['getUserAllProducts'])
  },
  computed: {
    ...mapState(userAllProducts, ['allProducts', 'sortUserProducts'])
  },
  mounted() {
    // this.$http
    //   .get(`${VITE_URL}api/${VITE_PATH}/products`)
    //   .then((res) => {
    //     console.log(res);
    //     this.products = res.data.products;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
     this.getUserAllProducts();
     
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #f19db5;
  &:hover {
    color: #fff;
    background-color: #f19db5;
  }
}
</style>
