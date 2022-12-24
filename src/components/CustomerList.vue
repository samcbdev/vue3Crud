<template>
    <div class="customerlist">
      <p>page No: {{ currentPage }}</p>
      <table class="table table-stripped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Links</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, key) in customers" :key="key" v-if="count != 0">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.salary }}</td>
            <td><router-link :to="'customer/'+customer.id">View</router-link></td>
          </tr>
          <tr v-else>
            <td colspan="5">No Records Found</td>
          </tr>
        </tbody>
      </table>
      <div class="paginate">
        <button @click="pageSwitch(pagination.prev)">Prev({{ pagination.prev }})</button>
        <button>Current({{ currentPage }})</button>
        <button @click="pageSwitch(pagination.next)" >Next({{ pagination.next }})</button>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'CustomerList',
    props: {
      customers: Array,
      count: Number,
      currentPage: Number,
      pagination: Array
    },
    methods: {
      pageSwitch(page) {
        this.$emit('pager', page);
      }
    }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  