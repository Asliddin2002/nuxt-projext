<template>
    <div @click="hideModalFunc" class=" absolute z-50 bg-black -top-2/4 -bottom-1/2 left-0   right-0 opacity-60">
    </div>
</template>

<script>
    export default {
    name: "BgBlur",
    methods: {
        hideModalFunc() {
            this.$store.dispatch("hideModalFunc")
        },
    },
}
</script>

<style scoped>

</style>