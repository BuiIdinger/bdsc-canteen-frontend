import { ref } from "vue"

export namespace LoadingScreen {
  export const visible = ref<boolean>(true);

  export namespace Phrase {
    export const phrase = ref<string>("Heating up the ovens");
    export const phraseKey = ref<number>(0);

    const phrases: string[] = [
      "Heating up the ovens",
      "Taking orders",
      "Placing orders",
      "Restocking",
    ];

    export const rotate = (): void => {
      phraseKey.value++;
      phrase.value = phrases[Math.floor(Math.random() * phrases.length)];
    }
  } // namespace Phrase
} // namespace LoadingScreen