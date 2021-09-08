<template>
  <div>
    <ul>
      <li v-for="dev in devs" :key="dev.id" style="cursor: pointer" @click="index = dev.id">
        {{ dev.name }}
        <div v-if="dev.id === index">
          Age: {{ dev.age }}
          Gender: {{ dev.gender }}
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
