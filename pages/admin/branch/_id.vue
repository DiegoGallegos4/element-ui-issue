<template>
  <div class="form-container">
    <form-breadcrumb current-page="branches" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('branch') }}
    </h3>
    <branch-form 
      ref="branchForm"
      :frm="state.frm"
      :loading="state.loading"
      :supermarkets="supermarkets"
      :on-submit="onSubmit"
      :rules="rules"
      :update="update"
    />
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import BranchForm from '@/components/Forms/branch'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    BranchForm
  },
  async asyncData({ store, params }) {
    await store.dispatch('branch/fetchRecord', params.id)
    await store.dispatch('supermarket/fetch')
    return { supermarkets: store.state.supermarket.collection }
  },
  data() {
    return {
      rules: {
        supermarket: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({ state: state => state.branch })
  },
  methods: {
    onSubmit() {
      this.$refs.branchForm.validate(valid => {
        if (valid) return this.$store.dispatch('branch/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('branch/update', { field, value })
    }
  }
}
</script>
