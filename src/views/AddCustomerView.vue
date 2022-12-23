<template>
  <div class="about">
      <h1 class="page-header">Add Customer</h1>
      <AddCustomer />
  </div>
</template>

<script>
import AddCustomer from '@/components/AddCustomer.vue'

export default {
  name: 'add',
  data () {
    return {
      customer: {}
    }
  },
  components: {
    AddCustomer
  },
}
</script>