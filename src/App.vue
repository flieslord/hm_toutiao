<template>
  <div></div>
</template>

<script>
import { getAllChannelsAPI } from '@/api'
export default {
  name: 'App',
  async created () {
    try {
      const res = await getAllChannelsAPI()
      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
