<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section"> 
        <h1>Menu</h1>
        <img src="../assets/a-book.png">
      </div>

      <div class="grid">
        <ion-grid router-link="/vocabulary">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">คำศัพท์</h1>
              <img class="cardvocab" src="../assets/language.png">
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/Conversation">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">บทสนทนา</h1>
              <img class="cardConversation" src="../assets/square.png">
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/startquiz">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">แบบทดสอบ</h1>
              <img class="cardstartquiz" src="../assets/quiz1.png">
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(144, 115, 41, 0.59);
}

.top-section{
    max-height: 150px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: #31735F;
    padding-top: 100px;
  }

h1 {
  font-size: 3.5rem;
  transform: translateX(3.5vh);
  font-family: "Tangerine", serif;
  font-style: normal;
  font-weight: 500;
  margin-top: -25px;
}

img {
    width: 30vh;
    height: 20vh;
    transform: translateY(-17vh);
    margin-left: 10rem;
  }

.grid {
  margin-top: 6px;
}

ion-col {
  border-radius: 20px;
  height: 150px;
  background-color: rgba(17, 112, 142, 0.88);
}

.cardstartquiz {
  max-width: 85px;
  max-height: 86px;
  margin-top: 120px;
  margin-left: 30px;
}

.cardConversation {
  max-width: 85px;
  max-height: 85px;
  margin-top: 120px;
  margin-left: 30px;
}

.cardvocab {
  max-width: 85px;
  max-height: 85px;
  margin-top: 120px;
  margin-left: 30px;
}

.text {
  font-size: 20px;
  color: aliceblue;
  transform: translateY(12vh);
  margin-left: 160px;
}
</style>
