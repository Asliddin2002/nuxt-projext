<template>
    <div class="sm:flex sm:space-x-5  mt-6">
        <div class="sm:w-3/5 shadow-sm rounded-md self-start xsm:mb-4  pb-3">
            <div class="flex  mb-4 w-full">
                <span @click="hide"
                    class="hover:shadow-sm text-center xml rounded-sm hover:text-green w-2/6 cursor-pointer xsm:px-1 sm:px-4 py-1">Xususiyatlari</span>
                <span @click="show"
                    class="w-2/3 hover:shadow-sm xml rounded-sm hover:text-green cursor-pointer xsm:px-1 sm:px-4 py-1">Foydalanuvchi
                    sharhlari</span>
            </div>
            <div v-show="!showHowToUse" class=" mx-3 ">
                <div v-for="character in characters.characters" class="w-full flex my-0.37 justify-between">
                    <li>{{character.property}}</li>
                    <div class=" xsm:hidden xl:block border-dotted border-b-2 w-2/3"></div>
                    <span>{{character.value}}</span>
                </div>
            </div>
            <div v-show="showHowToUse" class=" mx-3 ">
                Hali malumot yo'q
            </div>
        </div>
        <div class=" sm:w-2/5 self-start">
            <img src="~/assets/images/advertisementIns.jpg" class="w-full" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "characteristics",
    data() {
        return {
            showHowToUse: false
        }
    },
    props: {
        characters: {
            type: Object | Array,
            required: true,
            default: [],
        }
    },
    methods: {
        hide() {
            this.showHowToUse = false
        },
        show() {
            this.showHowToUse = true
        }
    },
}
</script>

<style scoped>

</style>