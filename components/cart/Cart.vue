<template>
  <div class="relative">
    <BgBlur  v-show="modal" />
    <Container>
      <PaymentModal v-show="modal" :cart="cart" />
      <CartItems />
      <Services />
    </Container>
  </div>
</template>

<script>
import Footer from '~/components/footer/Footer.vue'
import Services from '~/components/services/Services.vue'
import LangBar from '~/components/navbar/LangBar.vue'
import Container from '~/components/Container.vue'
import CartItems from './CartItems.vue'
import PaymentModal from './payments/PaymentModal.vue'
import BgBlur from './payments/BgBlur.vue'
export default {
  name: 'Cart',
  components: {  Footer, Services, LangBar, Container, CartItems, PaymentModal, BgBlur },
  computed: {
    modal() {
     console.log(this.$store.state.showModal);
      return this.$store.state.modal.showModal
    },
        cart() {
      return this.$store.state.cart?.cart
    },

  },

}
</script>

<style scoped>

</style>