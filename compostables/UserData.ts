import { ref } from "vue"

export namespace UserData {
  export const id = ref<string>("NULL");
  export const email = ref<string>("NULL");
  export const firstName = ref<string>("NULL");
  export const lastName = ref<string>("NULL");
}