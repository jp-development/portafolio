<template>
  <Header />
  <Services />
  <Portfolio />
</template>

<script>
import Header from '../components/Header.vue'
import Services from '../components/Services.vue'
import Portfolio from '../components/Portfolio.vue'
import Clients from '../components/Clients.vue'

export default {
  components:{
    'Header': Header,
    'Services': Services,
    'Portfolio': Portfolio,
    'Clients': Clients,
  }
}
</script>

<style>

</style>