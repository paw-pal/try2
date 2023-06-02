<template>
  <h2>填表單</h2>
  <div class="container">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6">
        <VForm @submit="submitForm" v-slot="{ errors }">
          <label for="input-name" class="mb-2">姓名</label>
          <VField
            type="text"
            class="form-control"
            id="input-name"
            placeholder="請輸入姓名"
            v-model="name"
            name="姓名"
            :class="{ 'is-invalid': errors['姓名'] }"
            rules="required"
          ></VField>
          <ErrorMessage name="姓名"></ErrorMessage>
          <label for="input-phone" class="my-2">電話</label>
          <VField
            type="text"
            class="form-control"
            id="input-phone"
            placeholder="請輸入電話"
            v-model.number="phone"
            name="電話"
            :class="{ 'is-invalid': errors['電話'] }"
            rules="required"
          ></VField>
          <ErrorMessage name="電話"></ErrorMessage>
          <label for="input-mail" class="my-2">信箱</label>
          <VField
            type="text"
            class="form-control"
            id="input-mail"
            placeholder="請輸入信箱"
            v-model="mail"
            name="信箱"
            :class="{ 'is-invalid': errors['信箱'] }"
            rules="required|email"
          ></VField>
          <ErrorMessage name="信箱"></ErrorMessage>
          <label for="input-address" class="my-2">地址</label>
          <VField
            type="text"
            class="form-control"
            id="input-address"
            placeholder="請輸入地址"
            v-model="address"
            name="地址"
            :class="{ 'is-invalid': errors['地址'] }"
            rules="required"
          ></VField>
          <ErrorMessage name="地址"></ErrorMessage>
           <label for="input-address" class="my-2">付款方式</label>
          <VField
            
            class="form-control"
            id="input-address"
            v-model="billWay"
            name="付款方式"
            :class="{ 'is-invalid': errors['付款方式'] }"
            rules="required"
            as="select"
          >
          <option value="">請選擇</option>
          <option value="creditCard">信用卡支付</option>
          <option value="payLater">貨到付款</option>
          </VField>
          <ErrorMessage name="付款方式"></ErrorMessage>
           <label for="input-pickupAddress" class="my-2">收件地址</label>
          <VField
            type="text"
            class="form-control"
            id="input-pickupAddress"
            placeholder="請輸入地址"
            v-model="pickupAddress"
            name="收件地址"
            :class="{ 'is-invalid': errors['收件地址'] }"
            rules="required"
          ></VField>
          <ErrorMessage name="收件地址"></ErrorMessage>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      phone:'',
      mail:'',
      address:'',
      billWay:'',
      pickupAddress:''
    };
  },
  methods: {
    submitForm() {
      console.log('送出');
    }
  }
};
</script>
