<template>
  <div>
    <Container>
      <div class="flex flex-col items-center justify-center mt-7 font-sans">
        <img src="~/assets/images/LoginImage.svg" alt="login" />
        <p class="xsm:text-center">
          Xaridni davom ettirish uchun akkauntingizga kiring yoki
          <span class="text-green font-semibold cursor-pointer">Olmaliq savdo</span> saytidan
          <span class="text-green font-semibold cursor-pointer">roʻyxatdan</span> oʻting !!!
        </p>
        <h1 class="font-semibold text-4xl my-4 text-green xsm:text-center">{{ $t('registration.welcome') }}</h1>
        <LogupPage :inputData="inputData" :inputValidate="inputValidate" />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container.vue'
import Footer from '~/components/footer/Footer.vue'
import Header from '~/components/header/header.vue'
import LogupPage from '~/components/regstration/LogupPage.vue'
export default {
  name: 'Registration',
  components: { Header, Container, Footer, LogupPage },
  data() {
    return {
      inputData: {
                phone: "",
                password: "",
                firstName: "",
                passwordConfirmation: ""
            },
            inputValidate: {
                phoneValidate: false,
                passwordValidate: false,
                firstNameValidate: false,
                passwordConfirmationValidate: false,
            },
    }
  },
}
</script>

<style scoped>
</style>