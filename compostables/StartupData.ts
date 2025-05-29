import { ref } from "vue"
import { UserData} from "~/compostables/UserData"

export namespace StartpData {
  export const receive = (message: MessageEvent) => {
    UserData.id.value = message.data.id;
    UserData.email.value = message.data.e;
    UserData.firstName.value = message.data.fn;
    UserData.lastName.value = message.data.ln;
  }
} // namespace StartupData