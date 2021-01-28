<template>
  <div class="flex flex-col items-center bg-white p-4 h-96 rounded-md">
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
      v-model="content"
      class="textarea mt-4 border border-solid border-gray-200 w-full h-full"
    />
    <div class="grid grid-flow-col gap-4 mt-auto">
      <button
        class="bg-gray-700 px-4 py-2 text-white mt-6 rounded-sm text-lg"
        @click="edit"
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
  </div>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmit } from 'vue'

const props = defineProps({ note: Object })
const emit = defineEmit(['delete', 'update'])

const isEditing = ref(false)
const { note } = toRefs(props)
const { value: title } = ref(note.value.title)
const { value: content } = ref(note.value.content)

const edit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) emit('update', { title, content })
}
</script>