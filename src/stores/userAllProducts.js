import axios from 'axios';
import { defineStore } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('allProducts', {
  state: () => ({
    allProducts: [],
    sortUserProducts: []
  }),
  actions: {
    getUserAllProducts() {
      axios
        .get(`${VITE_URL}api/${VITE_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          console.log('UserAllProducts', res.data.products);
          this.allProducts = res.data.products;
          this.sortProducts();
        //   if (type === 'sort') {
        //     this.sortProducts(category);
        //   } else{
        //     console.log(type);
        //     this.sortProducts=this.allProducts;
        //     console.log(this.sortProducts);
        //   }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sortProducts() {
    //   if (sortBy === 'recommend') {
    //     this.sortUserProducts=this.allProducts.filter((item) => item.recommend)
    //     console.log(this.sortUserProducts);
    //   }else{
    //     console.log(sortBy);
    //     this.sortUserProducts=this.allProducts.filter((item) => item.category===`${sortBy}`)
    //     console.log(this.sortUserProducts);
    //   }


      this.sortUserProducts=this.allProducts.filter((item) => item.recommend)
      console.log(this.sortUserProducts);




      // const arr = this.allProducts.filter((item) => item.recommend);
      // console.log(arr);
    }
  }
});
