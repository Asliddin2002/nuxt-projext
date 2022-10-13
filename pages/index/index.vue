<template>
  <div class="main relative">
    <div class="content"></div>
    <Container>
      <CategoriesSwiper />
      <categories-component-vue :categoryItems="categoryItems" />
      <brands-vue :brandItems="brandItems" />
      <popular-products-vue :products="dataProducts" />
      <product-in-discount-vue :productItems="productItems" />
      <advertisement-products-component-vue :advertisementItems="advertisementItems" />
      <favorite-products-vue :productItems="productItems" />
      <BrandSlider />
      <Services />
      <LastSeenProducts :productItems="productItems.slice(0, 6)" />
    </Container>
   

  </div>
</template>
<script>
import CategoriesComponentVue from '~/components/category-components/CategoriesComponent.vue'
import Services from '~/components/services/Services.vue'
import BrandSlider from '~/components/services/BrandSlider.vue'
import MyComponent from '~/components/categoriesSwiper/CategoriesSwiper.vue'
import BrandsVue from '~/components/brands/Brands.vue'
import PopularProductsVue from '~/components/popular-products/PopularProductsComponent.vue'
import ProductInDiscountVue from '~/components/products-in-discount/ProductInDiscount.vue'
import FooterVue from '~/components/footer/Footer.vue'
import ScrollTopButton from '~/components/footer/ScrollTopButton.vue'
import AdvertisementProductsComponentVue from '~/components/advertisement-products/AdvertisementProductsComponent.vue'
import FavoriteProductsVue from '~/components/favorite-products/FavoriteProducts.vue'
import Contact from '~/components/contact/Contact.vue'
import LastSeenProducts from '~/components/lastSeenProducts/LastSeenProducts.vue'
import FooterNavbar from '~/components/footer/FooterNavbar.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CategoriesComponentVue,
    Services,
    BrandSlider,
    MyComponent,
    BrandsVue,
    PopularProductsVue,
    ProductInDiscountVue,
    FooterVue,
    ScrollTopButton,
    AdvertisementProductsComponentVue,
    FavoriteProductsVue,
    Contact,
    LastSeenProducts,
    FooterNavbar,
  },
  data() {
    return {
      products:[],
      categoryItems: [
        { img: 'category1.svg', name: 'Telefon  va Smartfonlar' },
        { img: 'category2.svg', name: 'Orgtexnika va Kompyuterlar' },
        { img: 'category3.svg', name: 'Televizor va Videotexnikalar' },
        { img: 'category4.svg', name: "Chiroy va go'zallik" },
        { img: 'category5.svg', name: 'Maishiy texnikalar' },
        { img: 'category6.svg', name: 'Avto jihozlar' },
      ],
      brandItems: [
        {
          img: 'brand1.jpg',
        },
        {
          img: 'brand2.jpg',
        },
        {
          img: 'brand3.jpg',
        },
        {
          img: 'brand4.png',
        },
        {
          img: 'brand5.jpg',
        },
        {
          img: 'brand6.jpg',
        },
      ],
      productItems: [
        {
          id: 1,
          img: 'product1.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: false,
          available: true,
        },
        {
          id: 2,
          img: 'product2.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 6,
          img: 'product3.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 3,
          img: 'product4.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 4,
          img: 'product5.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: false,
        },
        {
          id: 5,
          img: 'product6.jpg',
          extraImage:['product1.1.svg', 'product1.2.svg','product1.3.svg','product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters:{
            brand: 'Samsung',
            version:'15.0',
            backCamera:'48 MP',
            graphicCart:'Exsynos',
          },
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
      ],
      advertisementItems: [
        {
          img: 'advertisement3.jpg',
        },
        {
          img: 'advertisement2.jpg',
        },
        {
          img: 'advertisement1.jpg',
        },
      ],
     
    }
  },
  methods: {
  async  getProductsAll () {
    
    }
  },
  async fetch (ctx) {
    // console.log(ctx, '====>>>>');
    await ctx.store.dispatch('getProducts', {
      
    })
      .then (res => {
        this.products = res
        // console.log('getProducts====>>>>',);
      })
     await  ctx.store.dispatch('getBrands')
     .then (res => {
    // console.log('getBrands====>>>>',res);
     })
     await  ctx.store.dispatch('getCategories', {
      format: 'Salom',
     })
     .then (res => {
       console.log('getCategory====>>>>',res);
     })
  },
  computed:{
    ...mapGetters(["dataProducts", "dataBrands","dataCategories"])
  },
  mounted (){
    console.log("dataCategories=====>",this.dataCategories)
  }
  }
</script>




