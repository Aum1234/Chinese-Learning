<template>
  <ion-page>
    <ion-content>
      <div align="center">
        <h1> Chinese Learning </h1>
        <img src="../assets/love-book.png">
      </div>

      <div align="center">
        <ion-button size="large" expand="block" shape="round" router-link="/menu">
        <ion-text> Get Started </ion-text>
      </ion-button>
  </div> 
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton,IonText } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartPage",
  components: {
    IonPage,
    IonContent, IonButton ,IonText
  },
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(144, 115, 41, 0.59);
}

img {
    width: 38vh;
    height: 48vh;
    transform: translateY(16vh);
  }

ion-button {
    transform: translateY(30vh);
    width: 38vh;
    height: 9vh;
    --background: #D4AEAE;
  }

  ion-text {
    font-size: 1.5em;
  }

</style>
