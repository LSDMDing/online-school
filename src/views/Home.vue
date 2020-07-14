<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/common/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style scoped>
.home{
  height: 2.667rem;
}
</style>
