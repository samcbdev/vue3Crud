<template>
  <div class="add">
      <h1 class="page-header">Add Customer</h1>
      <AddCustomer @newCustomer="newCustomer"/>
  </div>
</template>

<script>
import axios from 'axios'
import AddCustomer from '@/components/AddCustomer.vue'

export default {
  name: 'add',
  data () {
    return {

    }
  },
  components: {
    AddCustomer,
  },
  methods: {
    async newCustomer(newCustomer) {
            // if (!this.customer.name || !this.customer.email || !this.customer.age || !this.customer.salary) {
            //     console.log("Fill all fields");
            // } else {
                            
                await axios.post('http://192.168.1.17:80/api/createEmployees', newCustomer)
                    .then(res => {
                      this.$router.push({path: '/', query: {alert: 'success'}})
                    })
                    .catch((error) => {
                        error = error
                    })
                console.log(123);
                // e.preventDefault()
            // }
            // e.preventDefault()
        }
  }
}
</script>