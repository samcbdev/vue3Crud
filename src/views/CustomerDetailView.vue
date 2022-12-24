<template>
  <div class="details">
    <h1 class="page-header">Details</h1>
    <router-link to="/">Back</router-link>
    <p><strong>Name: </strong>{{ customer.name }}</p>

    <div>
        <button><router-link :to="'/editcustomer/'+customer.id">Edit</router-link></button>
        <button @click="deleteCustomer(customer.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "details",
    data () {
        return {
            customer: {}
        }
    },
    methods: {
        fetchCustomer(id) {
            axios.get('http://192.168.1.17:80/api/getEmployee/' + id)
                .then((res) => {
                    this.customer = res.data.data
                })
        },
        deleteCustomer(id) {
            axios.get('http://192.168.1.17:80/api/deleteEmployee/' + id)
                .then((res) => {
                    this.$router.push({path: '/', query: {alert: 'successfully deleted'}})
                })
        }
    },
    created () {
        this.fetchCustomer(this.$route.params.id)
    }
}
</script>

<style>

</style>