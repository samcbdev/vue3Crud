<template>
  <div id="add">
    <form v-on="addCustomer">
        <div class="well">
            <h4>Name</h4>
            <input type="text" class="form-control" placeholder="Name" v-model="customer.name">
        </div>
        <div class="well">
            <h4>Email</h4>
            <input type="email" class="form-control" placeholder="Email" v-model="customer.email">
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
    data () {
        return {
            customer: {}
        }
    }
}
</script>

<style>

</style>