<template>
    <div @click="hideModalFunc" class=" absolute z-50 bg-black top-0 bottom-0 left-0 right-0 opacity-60">
    </div>
</template>

<script>
    export default {
    name: "BgBlur",
    methods: {
        hideModalFunc() {
            // this.$store.dispatch("modal/hideModalFunc")
        },
    },
}
</script>

<style scoped>

</style>