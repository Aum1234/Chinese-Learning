<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" size = "large" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text"> บทสนทนา </h1>
      </div>

           <div class="coll">
        <ion-grid router-link="/greeting">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/hii.png" />
              <h2> ทักทาย </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/introduceyourself">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/girl.png" />
              <h2> แนะนำตัวเอง </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/askage">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/age.png" />
              <h2> ถามอายุ </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/learning">
          <ion-row>
            <ion-col size="12">
              <img  style="margin-left: 200px" src="../assets/webinar.png" />
              <h2> พูดถึงการเรียน </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/family">
          <ion-row>
            <ion-col size="12">
                <img src="../assets/family.png" />
              <h2> พูดถึงครอบครัว </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/shopping">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/shopping.png" />
              <h2> ซื้อของ </h2>
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
import { chevronBack } from 'ionicons/icons';

export default defineComponent({
  name: "ConversationPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },  setup () {
    return {
      chevronBack
    }
  }
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(144, 115, 41, 0.59);
}

.top-section {
  min-height: 150px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #31735F;
  padding-top: 100px;
}

ion-icon {
  width: 3rem;
  height: 4rem;
  transform: translateY(-11.5vh);
  margin-left: 6px;
  font-weight: 800;
}

.text {
  font-size: 2.3rem;
  font-family: serif;
  text-align: center;
  transform: translateY(-20vh);
  font-weight: 80;
}

.coll {
  margin-top: -105px;
}

ion-row {
  margin-top: -32px;
}

ion-col{
    max-width: auto;
    height: 160px;
    background-color: rgba(17, 112, 142, 0.88);
    border-radius: 20px;
    display: block;
    margin: 18px 0;
}

img {
       width: 130px;
       height: 140px;
       align-items: center;
       margin-left: 200px;
   }

h2 {
     font-size: 26px;
     font-family: serif;
     color: #FFFFFF;
     margin-left: 1.8rem;
     margin-top: -100px;
     font-weight: 90;
   }

   

</style>

