<template>
  <div>
    <!-- <BgBlur v-show ="modal" /> -->
    <Container>
      <ProductDetails :details="details" />
      <!-- <PaymentModal :cart="cart" v-show="modal" /> -->
      <LastSeenProducts :productItems="productItems" />
      <AdvertisementProductsComponent :advertisementItems="advertisementItems" />
    </Container>

  </div>
</template>

<script>
import ProductDetails from '~/components/productDetails/ProductDetails.vue';
import Container from '~/components/Container.vue';
import AdvertisementProductsComponent from '~/components/advertisement-products/AdvertisementProductsComponent.vue';
import LastSeenProducts from '~/components/lastSeenProducts/LastSeenProducts.vue';
// import BgBlur from '~/components/cart/payments/BgBlur.vue';
// import PaymentModal from '~/components/cart/payments/PaymentModal.vue';
export default {
  name: "productDetails",

  components: { ProductDetails, Container, AdvertisementProductsComponent, LastSeenProducts, 
    // BgBlur,PaymentModal 
   },
  data() {
    return {
      details: null,
      // computed: {
      //   modal() {
      //     //  console.log(this.$store.state.showModal);
      //     return this.$store.state.modal.showModal
      //   },
      //   cart() {
      //     return this.$store.state.cart?.cart
      //   },
      // },
      productItems: [
        {
          id: 1,
          img: 'product1.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
          rating: '4.5',
          reviews: '100',
          inStock: false,
          available: true,
        },
        {
          id: 2,
          img: 'product2.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 6,
          img: 'product3.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 3,
          img: 'product4.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          id: 4,
          img: 'product5.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: false,
        },
        {
          id: 5,
          img: 'product6.jpg',
          extraImage: ['product1.1.svg', 'product1.3.svg', 'product1.4.svg'],
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          characters: [
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
            { property: "Brand", value: "Samsung" },
            { property: "Version", value: "Versia 10" },
            { property: "Camera", value: "48 MP" },
            { property: "Tezkor Xotira (RAM)", value: "8 GB" },
            { property: "Operative Xotira (ROM)", value: "4 GB" },
            { property: "Protsessor", value: "Android" },
          ],
          colors: [
            {
              img: "blue.svg",
              color: "green"
            },
            {
              img: "white.svg",
              color: "white"
            },
            {
              img: "yellow.svg",
              color: "yellow "
            },
            {
              img: "green.svg",
              color: "blue "
            },
            {
              img: "black.svg",
              color: "black"
            },
          ],
          memory: ["128 GB", "256 GB", "512 GB", "1 TB"],
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
  created() {
    const item = this.productItems.filter((item) => item.id === parseInt(this.$route.params.productdetails))
    this.details = item
    //  console.log(this.details)
  },
}
</script>

<style scoped>

</style>