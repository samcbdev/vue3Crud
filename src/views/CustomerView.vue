<template>
    <div class="home">
      <h1 class="page-header">Manage Customers</h1>
      <AlertMsg v-if="alert" :message="alert" />
      <customerList 
        :customers="customers" 
        :count="count" 
        :currentPage="currentPage"
        :pagination="pagination"
        @pager="switchpage"
      />
    </div>
</template>
  
<script>
// @ is an alias to /src
import axios from 'axios'
import customerList from '@/components/CustomerList.vue'
import AlertMsg from '@/components/AlertMsg.vue'

export default {
  name: 'CustomerView',
  data () {
    return {
      customers: [],
      currentPage: '',
      pagination: [],
      count: 0,
      page: 1,
      alert: ""
    }
  },
  components: {
    customerList,
    AlertMsg
  },
  methods: {
    fetchCustomers() {
      this.pagination = []
      axios.get('http://192.168.1.17:80/api/getEmployees?page=' + this.page)
        .then((res) => {
          let data = res.data.data
          this.customers = data.data
          this.count = data.total
          this.currentPage = data.current_page
          this.pagination.push({'prev': this.currentPage - 1, 'next': this.currentPage + 1, 'lastPage': data.last_page})
          this.pagination.prev = this.currentPage - 1
          this.pagination.next = this.currentPage + 1
        })
    },
    switchpage(page) {
      this.page = page
      this.fetchCustomers()
    }
  },
  created () {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
}
</script>
  