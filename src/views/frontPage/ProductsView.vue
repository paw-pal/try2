<template>
  <div class="container pt-10">
    <h3 class="title2 text-black position-fixed">商品列表</h3>
    <div class="row" style="margin-top: 66px">
      <div class="col-md-3 products-nav  mb-5" >
        <ul class="nav flex-lg-column text-center border border-2 border-primary rounded">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="getProducts"
              :class="{'bg-primary':currentActive==='全部','text-white':currentActive==='全部'}"
              >全部商品</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('底妝')" :class="{'bg-primary':currentActive==='底妝','text-white':currentActive==='底妝'}">底妝</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('眉彩')" :class="{'bg-primary':currentActive==='眉彩','text-white':currentActive==='眉彩'}">眉彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('眼彩')" :class="{'bg-primary':currentActive==='眼彩','text-white':currentActive==='眼彩'}">眼彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('頰彩')" :class="{'bg-primary':currentActive==='頰彩','text-white':currentActive==='頰彩'}">頰彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('唇彩')" :class="{'bg-primary':currentActive==='唇彩','text-white':currentActive==='唇彩'}">唇彩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="filterProduct('刷具')" :class="{'bg-primary':currentActive==='刷具','text-white':currentActive==='刷具'}">刷具</a>
          </li>
        </ul>
      </div>
      <div class="col-md-9 products-card offset-md-2 offset-lg-3">
        <div class="row">
          <div class="col-sm-6 col-lg-4" v-for="product in products" :key="product.id">
            <CardComponent :product="product"></CardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pagination :pages="pages" @changePage="getProducts"></pagination>;
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
import pagination from '../../components/dashboard/paginationComponent.vue';
import userAllProducts from '../../stores/userAllProducts';
import { mapActions, mapState } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      pages:{},
      currentActive:''
    };
  },
  components: {
    CardComponent, pagination
  },
  methods: {
    getProducts(page=1){
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/products?page=${page}`)
        .then((res) => {
          console.log(res);
          console.log('UserAllProducts', res.data.products);
          this.products=res.data.products;
          this.pages=res.data.pagination;
          this.currentActive='全部';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterProduct(key){
      // console.log(key);
      // const text=key;
      // console.log(this.allProducts);
      // const arr = this.allProducts.filter((item) => {
      //   return item.category===text
      // })

      // this.products=arr;
      // ---------------------------------------

    this.$http.get(`${VITE_URL}api/${VITE_PATH}/products?category=${key}`)
        .then((res) => {
          console.log(res);
          this.products=res.data.products;
          this.pages=res.data.pagination;
        this.currentActive=key;
        // this.$router.replace({query:{}});
        })
        .catch((err) => {
          console.log(err);
        });

      //console.log(arr);
      // this.allProducts.forEach((item) => {
      //   console.log(item.category,text);
      //   if(item.category===text){
      //     console.log('ya');
      //   }
      // })

    },
    ...mapActions(userAllProducts, ['getUserAllProducts'])
  },
 computed: {
     ...mapState(userAllProducts, ['allProducts'])
    
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
    // this.getUserAllProducts();
    
    console.log(this.$router);
    const prevPage=this.$router.options.history.state.back;
    console.log(this.$router.options.history.state)
    const currentPage=this.$router.options.history.state.current;
    console.log(prevPage);
    // console.dir(this.$router.options.history.state.back);
  //  console.log(this.$route);
  //  console.log(this.$route.query.category);
   //const path = this.$route.path;
  
  console.log(currentPage);
  if(currentPage==='/products'){
    this.getProducts();
  }else{
    this.filterProduct(this.$route.query.category);
  }


  //  -----
  // if(prevPage==='/'){
  //   console.log('ya');
  //  this.filterProduct(this.$route.query.category);
  // }else{
  //   console.log('12');
  //       this.getProducts();
  // }
//--------



    //this.filterProduct(this.$route.query);
    //this.getProducts();
    
   
    
     
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

.products-nav{
  width: 100%;

   @media screen and (min-width: 992px) {
    width: 150px;
    position: fixed;
    height: 100vh;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
    
  }
}

.nav-item.active{
  background-color: #f19db5;
}


</style>
