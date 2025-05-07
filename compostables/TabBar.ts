import { ref, watch } from "vue"
import { useRoute } from "vue-router"

export namespace TabBar {
  export const activeBar = ref<string>("home");
  export const activeRoute = ref<string>();

  export const watchRoute = (): void => {
    const route = useRoute();
    activeRoute.value = route.path;
    
    watch(() => route.path, (path) => {
      activeRoute.value = path;
    });
  }
} // namespace TabBar