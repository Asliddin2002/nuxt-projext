<template>
    <div class="lg:flex w-full lg:space-x-5">
        <div class="sm:flex sm:space-x-5 lg:w-3/5">
            <div class="flex sm:flex-col xsm:space-x-0.5 sm:space-x-0 sm:space-y-3 xsm: mb-2">
                <div v-for="extraImages in extraImage.extraImage">
                    <div @click="handleChange(extraImages)"
                        class="shadow-sm cursor-pointer flex justify-center xsm:w-9.5 sm:w-9.7  pic-box rounded-md sm:px-2 py-0.35">
                        <img :src="require(`~/assets/images/${extraImages}`)" alt="product">
                    </div>
                </div>
            </div>
            <div class="shadow-sm relative  sm:w-4/5 flex justify-center pic-box rounded-md px-2 py-0.35">
                <img :src="require(`~/assets/images/${ activeImage}`)" alt="product"
                    class="h-full xsm:h-23 sm:h-full" />
                <span class="
                absolute
                top-9
                right-0.5
                bg-gray
                shadow-inner
                rounded-full
                text-white
                px-0.75
                py-0.75
                font-sans font-semibold
                text-sm
                cursor-pointer
              ">
                    <img src="~/assets/images/greenCompare.svg" alt="greenCompare" />
                </span>
                <span v-show="extraImage.discount" class="
                absolute
                top-0.5
                right-0.5
                bg-blue
                shadow-inner
                rounded-full
                text-white
                w-7 h-7
                flex items-center justify-center
                font-sans font-semibold
                text-xs
                cursor-pointer
              ">
                    {{extraImage.discount}}
                </span>
                <span v-show="extraImage.discount" class="
                absolute
                top-9.7
                right-0.5
                bg-gray
                shadow-inner
                rounded-full
                text-white
                px-0.75
                py-0.75
                font-sans font-semibold
                cursor-pointer
              ">
                    <img src="~/assets/images/greenHeart.svg" alt="greenCompare" />
                </span>
            </div>
        </div>
        <div class=" xsm:mt-5 lg:mt-0 lg:w-2/5">
            <h3 class="font-semibold mb-1">Rang</h3>
            <div class="flex xsm:space-x-0.5 sm:space-x-3">
                <div v-for="color in extraImage.colors">
                    <!-- <div class="shadow-sm cursor-pointer flex justify-center w-9.5 pic-box rounded-md px-2 py-0.35"> -->
                    <img @click="handleChange(color.img)" :src="require(`~/assets/images/${color.img}`)" alt="product">
                    <!-- </div> -->
                </div>
            </div>
            <h3 class="font-semibold my-1">Xotira</h3>
            <div class="flex xsm:space-x-1 sm:space-x-2">
                <div v-for="memory in extraImage.memory"
                    class="shadow-sm cursor-pointer hover:bg-red hover:text-white flex justify-center pic-box rounded-md xsm:px-0.5 sm:px-3 py-0.35 ">
                    {{memory}}</div>
            </div>
            <h3 class="font-semibold mt-2">Narx</h3>
            <h3 class="text-red text-sm line-through">{{extraImage.oldPrice}} so'm</h3>
            <h3 class=" text-2xl font-semibold text-green">{{extraImage.price}} so'm</h3>
            <div class="flex space-x-1 items-center">
                <h3 class="px-0.5 py-0.35 rounded text-xs  bg-gray">230 000 so'mdan / 24 oy</h3>
                <h3 class="text-sm text-blue underline cursor-pointer">Bo'lib to'lashga oling</h3>
            </div>
            <h3 class="font-semibold mt-2">To'lov usuli</h3>
            <!-- <nuxt-link :to="localePath('/cart')"> -->
                <div @click="showModal"
                    class="w-full gap-1 mt-0.4 flex py-0.5 font-semibold items-center justify-center rounded-md text-sm text-green border-2 cursor-pointer border-gray">
                    <img src="~/assets/icons_svg/Muddatli.svg" alt="bittada">
                    <span>Muddatli to'lov</span>
                </div>
            <!-- </nuxt-link> -->

            <nuxt-link :to="localePath('/cart/delivery')">
                <div
                    class="w-full gap-1 mt-0.4 flex py-0.5 font-semibold items-center justify-center rounded-md text-sm text-green border-2 cursor-pointer border-gray">
                    <!-- <img src="~/assets/icons_svg/Bittada.svg" alt="muddatli" /> -->
                    <img src="~/assets/icons_svg/Bittadayashil.svg" alt="">
                    <span>Bittada sotib olish</span>
                </div>
            </nuxt-link>
            <div @click="addtoCart()"
                class="w-full relative gap-1 mt-0.4 flex py-0.5 font-semibold items-center justify-center rounded-md text-sm text-white cursor-pointer bg-green">
                <!-- <img src="~/assets/icons_svg/Cart.svg" alt="muddatli" /> -->
                <img src="~/assets/icons_svg/Savatchaoq.svg" alt="">
                <span>Savatchaga</span>
                <div class="
                          indicator
                          absolute
                          flex
                          items-center
                          justify-center
                          w-3
                          h-3
                          font-semibold
                          text-xs
                          rounded-full
                          bg-red
                          text-white
                          -top-0.4
                          -right-0.4
                        ">
                    {{ cart.length }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "productView",
    data() {
        return {
            activeImage: this.extraImage.img
        }
    },
    props: {
        extraImage: {
            type: Object | Array,
            required: true,
            default: [],
        }
    },
    methods: {
        handleChange(item) {
            this.activeImage = item
        },
        showModal() {
            this.$store.dispatch("showModalFunc")
        },
        addtoCart() {
            this.$store.dispatch("addProductToCart", {
                product: this.item,
                quantity: 1
            })
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart?.cart
        },
    },

}
</script>

<style scoped>

</style>