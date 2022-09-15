<template>
  <div>
    <nuxt-child></nuxt-child>
    <Contact />
    <FooterVue />
    <ScrollTopButton />
    <FooterNavbar class="sticky" />
  </div>
</template>
<!-- new script -->
<script>
import Contact from '~/components/contact/Contact.vue'
import FooterVue from '~/components/footer/Footer.vue'
import ScrollTopButton from '~/components/footer/ScrollTopButton.vue'
import FooterNavbar from '~/components/footer/FooterNavbar.vue'
export default {
  components: {
    Contact,
    FooterVue,
    ScrollTopButton,
    FooterNavbar,
  },
}
</script>

