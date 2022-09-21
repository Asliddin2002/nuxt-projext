<template>
    <div class="mt-5">
        <ProductView :extraImage="details[0]" />
        <ProductCharact :characters="details[0]" />
    </div>
</template>

<script>
import Container from '../Container.vue';
import ProductView from './ProductView.vue';
import ProductCharact from './ProductCharact.vue';
export default {
    name: "productDetails",
    components: { Container, ProductView, ProductCharact },
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