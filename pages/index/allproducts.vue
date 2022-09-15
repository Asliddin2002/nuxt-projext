<template>
  <div>
    <AllProducts :categories="categories" />
  </div>
</template>

<script>
import AllProducts from '~/components/allProducts/AllProducts.vue'
export default {
  name: 'AllProductsRoute',
  components: { AllProducts },
}
</script>
