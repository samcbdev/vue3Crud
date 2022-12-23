<template>
    <div class="home">
      <h1 class="page-header">Manage Customers</h1>
      <customerList 
        :customers="customers" 
        :count="count" 
        :currentPage="currentPage"
      />
    </div>
</template>
  
<script>
// @ is an alias to /src
import axios from 'axios'
import customerList from '@/components/CustomerList.vue'
  
export default {
  name: 'CustomerView',
  data () {
    return {
      customers: [],
      currentPage: '',
      pagination: '',
      count: 0
    }
  },
  components: {
    customerList
  },
  methods: {
    fetchCustomers() {
      axios.get('http://10.65.214.115:8081/api/getEmployees?page=2')
        .then((res) => {
          this.customers = res.data.data
          this.count = res.data.total
          this.currentPage = res.data.current_page
          console.log(res.data);
        })
    }
  },
  created () {
    this.fetchCustomers()
  }
}
</script>
  