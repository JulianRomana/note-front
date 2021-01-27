<template>
  <h3
    v-if="!isEditing"
    class="text-gray-700 text-lg font-bold"
  >
    {{ title }}
  </h3>
  <input
    v-else
    v-model="title"
    class="input border border-solid border-gray-200 w-full"
  />
  <p
    v-if="!isEditing"
    class="text-gray-700 mt-4"
  >
    {{ content }}
  </p>
  <textarea
    v-else
    v-model="title"
    class="textarea mt-4 border border-solid border-gray-200 w-full h-full"
  />
  <div class="grid grid-flow-col gap-4 mt-auto">
    <button
      class="bg-gray-700 px-4 py-2 text-white mt-6 rounded-sm text-lg"
      @click="isEditing = !isEditing"
    >
      {{ isEditing ? 'Save' : 'Edit' }}
    </button>
    <button 
      class="bg-red-700 px-4 py-2 text-white mt-6 rounded-sm text-lg"
      @click="$emit('delete')"
    >
      Remove
    </button>
  </div>
</template>

<script setup="props">
import { ref, toRefs, defineProps, defineEmit } from 'vue'

const { note } = toRefs(props)
const { value: title } = ref(note.value.title)
const { value: content } = ref(note.value.title)

const isEditing = ref(false)
const props = defineProps({ note: Object })
const emits = defineEmit(['delete', 'update'])
</script>