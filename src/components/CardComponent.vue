<template>
  <div class="card mb-10 border-0 cursor-pointer overflow-hidden">
     <router-link class="position-absolute w-100 h-100 z-index-1" :to="`product/${product.id}`"></router-link>
    <div class="overflow-hidden">
        <img :src="product.imageUrl" class="card-img-top" alt="..." />
    </div>  
    <div class="card-body">
      <h2 class="card-title fs-5">{{ product.title }}</h2>
      <div class="card-text text-end">
       <del class="text-gray">NT ${{product.origin_price}}</del>
       <p class="fs-5">NT ${{product.price}}</p>
      </div>
      <div class="d-grid">
        <a href="#" class="btn btn-primary text-white position-relative z-index-2" @click.prevent="addtoCart(product)">加入購物車</a>
      </div>  
    </div>
  </div>
</template>
<script>
import cartStore from '../stores/cartStore';
import { mapActions } from 'pinia';
export default {
  props: ['product'],
  methods:{
    ...mapActions(cartStore,['addtoCart'])
  }
};
</script>

<style lang="scss" scoped>
img{
    height: 268px;
    object-fit: cover;
    transition: .3s;
}

.card{
     transition: .3s;
    &:hover{
        box-shadow:  8px 8px 8px 1px rgba(0, 0, 0, 0.2);
    }
    &:hover img{
        transform: scale(1.2);
    }
  
}

</style>
