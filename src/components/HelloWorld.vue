<template>
  <div>
    <DealTable/>
    <br/>
    <router-link to='shop-table'>前往商品购买页面</router-link>
  </div>
</template>

<script>
import DealTable from '@/components/DealTable'
export default {
  name: 'HelloWorld',
  components:{DealTable},
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
