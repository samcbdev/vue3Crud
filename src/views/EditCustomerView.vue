<template>
    <div class="edit">
        <h1 class="page-header">Edit Customer</h1>
        <router-link to="/">Back</router-link>
        <EditCustomer :customer="customer" @updateCustomer="updateCustomer"/>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import EditCustomer from '@/components/EditCustomer.vue'
  
  export default {
    name: 'edit',
    data () {
      return {
        customer: []
      }
    },
    components: {
      EditCustomer,
    },
    methods: {
        async updateCustomer(customer) {
              // if (!this.customer.name || !this.customer.email || !this.customer.age || !this.customer.salary) {
              //     console.log("Fill all fields");
              // } else {
                              
                  await axios.put('http://192.168.1.17:80/api/updateEmployees/'+this.$route.params.id, customer)
                      .then(res => {
                        this.$router.push({path: '/', query: {alert: 'update success'}})
                      })
                      .catch((error) => {
                          error = error
                      })
                  // e.preventDefault()
              // }
              // e.preventDefault()
        },
        fetchCustomer() {
            axios.get('http://192.168.1.17:80/api/getEmployee/' + this.$route.params.id)
                .then((res) => {
                    this.customer = res.data.data
                })
        }
    },
    created () {
        this.fetchCustomer()
    }
  }
  </script>