<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" size = "large" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text"> หมวดคำคัพท์ </h1>
      </div>

      <div class="coll">
        <ion-grid router-link="/animal">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/cartoon-cat.png" />
              <h2> สัตว์ </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/Food">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/food.png" />
              <h2> อาหาร </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/place">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/Place.png" />
              <h2> สถานที่ </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/occupation">
          <ion-row>
            <ion-col size="12">
              <img  style="margin-left: 180px" src="../assets/occupation.png" />
              <h2> อาชีพ </h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/importantdates">
          <ion-row>
            <ion-col size="12">
                <img src="../assets/calendar.png" />
              <h2>วันสำคัญต่างๆ</h2>
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
  name: "VocabularyPage",
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
  height: 3rem;
  transform: translateY(-11.5vh);
  margin-left: 5px;
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
  margin-top: -115px;
}

ion-row {
  margin-top: -30px;
}

ion-col{
    max-width: auto;
    height: 150px;
    background-color: rgba(17, 112, 142, 0.88);
    border-radius: 30px;
    display: block;
    margin: 18px 0;
}

img {
       width: 130px;
       height: 140px;
       align-items: center;
       margin-left: 180px;
   }

h2 {
     font-size: 26px;
     font-family: serif;
     color: #FFFFFF;
     margin-left: 2.5rem;
     margin-top: -100px;
     font-weight: 100;
   }

   

</style>
