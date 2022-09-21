<template>
  <div>
    <AllCategories :categories="categories" />
  </div>
</template>

<script>
import AllCategories from '~/components/allCategories/AllCategories.vue'
export default {
  name: 'AllCategories',
  components: { AllCategories },
}
</script>
