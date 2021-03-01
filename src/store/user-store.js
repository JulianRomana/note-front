import { ref, computed } from 'vue'

const authorization = ref(false)
const isSignedIn = computed(() => authorization.value)

const setUserAuthorization = (userAuthorization) => authorization.value = userAuthorization

export { isSignedIn, setUserAuthorization }