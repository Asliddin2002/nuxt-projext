<template>
    <div>
        <Container>
            <h3 class=" font-semibold text-green text-2xl mt-5 mb-1">Harid savatchasi</h3>
            <BuyNow/>
            <Services/>
        </Container>
            </div>
</template>

<script>

import Container from '~/components/Container.vue';
import Services from '~/components/services/Services.vue';
import Footer from '~/components/footer/Footer.vue';
import Header from '~/components/header/header.vue';
import BuyNow from '~/components/cart/buynow/BuyNow.vue';
    export default {
    components: {  Container, Services, Footer, Header, BuyNow },
}
</script>

<style scoped>

</style>