<template>
  <form
    class="flex flex-col items-center bg-white p-4 h-96 rounded-md"
    @submit.prevent="edit"
  >
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
      @keypress.enter.exact="edit"
    />
    <div class="grid grid-flow-col gap-4 mt-auto">
      <button
        type="submit"
        class="button"
      >
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
      <button
        class="button danger"
        @click="$emit('delete')"
      >
        Remove
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmit } from 'vue'

const props = defineProps({ note: Object })
const emit = defineEmit(['delete', 'update'])

const isEditing = ref(false)
const { note } = toRefs(props)
const title = ref(note.value.title)
const content = ref(note.value.content)

const edit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) emit('update', { title: title.value, content: content.value })
}
</script>