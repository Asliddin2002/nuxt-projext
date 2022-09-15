<template>
  <div>
    <div>
      <Header />
    </div>

    <div class="sticky z-50 top-0 shadow-sm">
      <Navbar :categories="categories" />
    </div>

    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        {
          id: '57d7ec66-8c28-45d6-af4f-7f63d23de3rw',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '57d7ec66-wert-45d6-af4f-7f63d23de385',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '57d7ec66-8c28-45d6-vbnm-7f63d23de385',
                slug: 'muzlatgichlar',
              },
              {
                product_name: 'Gaz plitalar',
                id: '57d7ec66-8c28-45d6-af4f-7fz3d23de385',
                slug: 'gaz-plitalar',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '57d7ec66-8c28-45d6-af4f-7f63d23ds385',
                slug: 'mikrotolqinli-pechlar',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '57d7ec66-8c28-45d6-af4f-7f63d23deq85',
                slug: 'dudbronlar',
              },
              {
                product_name: 'Pechlar',
                id: '56d7ec66-8c28-45d6-af4f-7f63d23de385',
                slug: 'pechlar',
              },
            ],
          },
          sub_category: {
            id: '57d7ec66-8c28-45d6-af4f-7f63d23dfg85',
            title_name: 'Oshxona uchun kattasa ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '5cv7ec66-8c28-45d6-af4f-7f63d23de385',
                slug: 'muzlatgichlar',
              },
              {
                product_name: 'Gaz plitalar',
                id: '57d7ec66-8c2m-45d6-af4f-7f63d23de385',
                slug: 'gaz-plitalar',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '57d7ec66-8c28-45d6-af4f-7f78d23de385',
                slug: 'mikrotolqinli-pechlar',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '57d7ec66-8c28-45d6-afff-7f63d23de385',
                slug: 'dudbronlar',
              },
              {
                product_name: 'Pechlar',
                id: '57djkl66-8c28-45d6-af4f-7f63d23de385',
                slug: 'pechlar',
              },
            ],
          },
        },
        {
          id: '57d7ec66-8c28-67d6-af4f-7f63d23de385',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '57d7ec66-8c28-45d6-af4f-7f6fgh3de385',
            title_name: 'Oshxona uchun  texnikalar',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '57ddfghj-8c28-45d6-af4f-7f63d23de385',
                slug: 'muzlatgichlar',
              },
              {
                product_name: 'Gaz plitalar',
                id: '57d7ec66-83ef-45d6-af4f-7f63d23de385',
                slug: 'gaz-plitalar',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '57d7ec66-8c28-455t-af4f-7f63d23de385',
                slug: 'mikrotolqinli-pechlar',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '57d9ij66-8c28-45d6-af4f-7f63d23de385',
                slug: 'dudbronlar',
              },
              {
                product_name: 'Pechlar',
                id: '57d7ec66-8c28-45d6-6y4f-7f63d23de385',
                slug: 'pechlar',
              },
            ],
          },
        },
        {
          id: '57dvfr66-8c28-45d6-af4f-7f63d23de385',
          name: 'Oshxona jihozlfdfdfari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '57d7ec66-8c28-45d6-af4f-7f63dliue385',
            title_name: 'uchun katta texnikalar',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '57d7ec66-8c28-4bd6-af4f-7f63d23de385',
                slug: 'muzlatgichlar',
              },
              {
                product_name: 'Gaz plitalar',
                id: '57d7ec66-8c28-45d6-af4f-7bgtr23de385',
                slug: 'gaz-plitalar',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '57d7ec66-bgfd-45d6-af4f-7f63d23de385',
                slug: 'mikrotolqinli-pechlar',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '57d7ec66-8c28-45d6-lg4f-7f63d23de385',
                slug: 'dudbronlar',
              },
              {
                product_name: 'Pechlar',
                id: '57d7ec66-8c28-45d6-af4f-4rhjd23de385',
                slug: 'pechlar',
              },
            ],
          },
        },
      ],
    }
  },
}
</script>
