<template>
  <div>
    <DevsList :devs="devs" />
  </div>
</template>

<script>
import DevsList from '../components/DevsList'
import { devs } from '../data'

export default {
  name: 'Home',
  components: { DevsList },
  data() {
    return {
      devs
    }
  }
}
</script>
