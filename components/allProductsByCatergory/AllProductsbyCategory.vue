<template>
  <div>
    <Header />
    <div>
      <Navbar :categories="categories" />
    </div>
    <Container>
      <h1>hiiiiiiiiiiiiiiiihihhihhihihhihhiihihihhihiihhi</h1>
      <!-- <BrandSlider /> -->
    </Container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../navbar/Navbar.vue'
import BrandSlider from '../services/BrandSlider.vue'
import Footer from '../footer/Footer.vue'
import Header from '../header/header.vue'
export default {
  name: 'AllProductsByCategory',
  data() {
    return {
      categories: [
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
      ],
    }
  },
  components: { Navbar, BrandSlider, Footer, Header },
}
</script>

<style scoped>
</style>