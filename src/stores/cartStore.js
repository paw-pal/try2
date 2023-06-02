import axios from 'axios';
import { defineStore } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore',{
    state:() => ({
        carts:[],
    }),
    actions:{
        getCartList() {
            axios.get(`${VITE_URL}api/${VITE_PATH}/cart`)
              .then((res) => {
                console.log(res);
                //console.log(res.data.data.carts);
                this.carts = res.data.data;
                console.log('購物車', this.carts);
                this.countHeight();
              })
              .catch((err) => {
                console.log(err);
              });
          },
          addtoCart(item,qty=1){
            const data ={
                product_id:item.id,
                qty
            };
            // console.log(data);
            axios.post(`${VITE_URL}api/${VITE_PATH}/cart`,{data})
              .then((res) => {
                console.log(res);
                //console.log(res.data.data.carts);
                this.carts = res.data.data;
                console.log('購物車', this.carts);
                this.getCartList();
              })
              .catch((err) => {
                console.log(err);
              });
          },
          delCartItem(cartId) {
            this.loadingId = cartId;
      
            axios
              .delete(`${VITE_URL}api/${VITE_PATH}/cart/${cartId}`)
              .then((res) => {
                console.log(res);
                this.loadingId = '';
                this.getCartList();
              })
              .catch((err) => {
                console.log(err);
              });
          },
          updateCartItem(item) {
            console.log(item);
            // this.updataloadingId = item.product.id;
            const data = {
              product_id: item.product.id,
              qty: item.qty
            };

            //console.log('購物車id',item.id);
            //console.log('產品id',item.product.id)
      
            axios
              .put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`, { data })
              .then((res) => {
                console.log(res);
                this.updataloadingId = '';
                this.getCartList();
              })
              .catch((err) => {
                console.log(err);
              });
          },
          delCarts() {
            this.$http
              .delete(`${VITE_URL}api/${VITE_PATH}/carts`)
              .then((res) => {
                console.log(res);
                this.updataloadingId = '';
                this.getCartList();
              })
              .catch((err) => {
                console.log(err);
              });
          },
    }
})