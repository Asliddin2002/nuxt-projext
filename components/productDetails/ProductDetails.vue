<template>
    <div class="mt-6">
        <BrandSlider/>
        <h3 class="text-green text-2xl font-semibold mb-3 ">{{details[0].name}}</h3>
        <ProductView :extraImage="details[0]" />
        <ProductCharact :characters="details[0]" />
    </div>
</template>

<script>
import Container from '../Container.vue';
import ProductView from './ProductView.vue';
import ProductCharact from './ProductCharact.vue';
import BrandSlider from '../services/BrandSlider.vue';
export default {
    name: "productDetails",
    components: { Container, ProductView, ProductCharact, BrandSlider },
    props: {
        details: {
            type: Object | Array,
            required: true,
            default: [],
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>