<template>
  <div>
    <i :class="icon" />
    <span slot="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
