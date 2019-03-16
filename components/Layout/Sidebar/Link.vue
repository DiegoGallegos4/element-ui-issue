<template>
  <nuxt-link :to="to" style="text-decoration: none" exact>
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
