<template>
  <button
    :class="['button', danger && 'danger']"
    v-bind="$attrs"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
<script setup>
import { toRefs, defineProps, defineEmit } from 'vue'

const props = defineProps({ danger: Boolean })
const emit = defineEmit(['click'])

const { danger } = toRefs(props)
</script>
