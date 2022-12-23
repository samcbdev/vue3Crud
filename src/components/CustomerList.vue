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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, key) in customers" :key="key" v-if="count != 0">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.salary }}</td>
          </tr>
          <tr v-else>
            <td colspan="5">No Records Found</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
export default {
    name: 'CustomerList',
    props: {
      customers: Array,
      count: Number,
      currentPage: Number
    }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  