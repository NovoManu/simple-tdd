<template>
  <div>
    <ul>
      <li v-for="dev in devs" :key="dev.id" style="cursor: pointer" @click="index = dev.id">
        {{ dev.name }}
        <div v-if="dev.id === index">
          <hr>
          <h3>{{ dev.name }} details:</h3>
          Age: {{ dev.age }}
          Gender: {{ dev.gender }}
          <hr>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DevsList',
  props: {
    devs: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      index: null
    }
  }
}

</script>
