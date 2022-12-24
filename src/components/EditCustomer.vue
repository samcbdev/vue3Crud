<template>
    <div id="edit">
      <form @submit="updateCustomer">
          <div class="well">
              <h4>Name</h4>
              <input type="text" class="form-control" placeholder="Name" v-model="customer.name">
          </div>
          <div class="well">
              <h4>Email</h4>
              <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
          </div>
          <div class="well">
              <h4>Age</h4>
              <input type="number" class="form-control" placeholder="Age" v-model="customer.age">
          </div>
          <div class="well">
              <h4>Salary</h4>
              <input type="number" class="form-control" placeholder="Salary" v-model="customer.salary">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
      name: "edit",
      props: {
        customer: Array
      },
      data () {
          return {
            
          }
      },
      methods: {
        updateCustomer(e) {
              if (!this.customer.name || !this.customer.email || !this.customer.age || !this.customer.salary) {
                  console.log("Fill all fields");
              } else {
                  let updateCustomer = {
                      name: this.customer.name,
                      email: this.customer.email,
                      age: this.customer.age,
                      salary: this.customer.salary,
                  }
                  this.$emit('updateCustomer', updateCustomer);
                  e.preventDefault()
              }
              e.preventDefault()
          }
      }
  }
  </script>
  
  <style>
  
  </style>