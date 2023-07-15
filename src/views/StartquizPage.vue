<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" class="icon" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text">Startquiz</h1>
      </div>

      <ion-grid class="grid">
      <ion-row style="margin-top: -15px;">
        <ion-col size="12" router-link="/quiz">
            <p class="textquiz"> แบบทดสอบ </p>
            <img src="../assets/quiz2.png">
            <ion-button class="btn"  expand="block" shape="round">เริ่มทำแบบทดสอบ</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronBack, volumeMediumOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'StartquizPage',
  components: {
    IonPage,
    IonContent,
    IonGrid, 
    IonRow, 
    IonCol,
  }, setup () {
    return {
      chevronBack,
      volumeMediumOutline
    }
  },

});
</script>

<style scoped>
  ion-content {
  --ion-background-color: rgba(144, 115, 41, 0.59);
}

.top-section{
  min-height: 150px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #31735F;
  padding-top: 100px;
}

.icon{
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-12vh);
  margin-left: 5px;
  font-weight: 600;
}

.text
{
  font-size: 2.3rem;
  text-align: center;
  font-family: serif;
  transform: translateY(-20.5vh);
  font-weight: 100;
}

.grid {
  margin-top: -150px;
}

ion-col{
    max-width: auto;
    max-height: auto;
    background-color: rgba(17, 112, 142, 0.88);
    border-radius: 20px;
    display: block;
    margin: 15px 0;
}

.card {
  background:#B43A74;
  border-radius: 5px;
}

.card_back {
  background: #FFFFFF;
  border-radius: 5px;
}

    .imgcard {
      margin-top: 2px;
      width: 48px;
      height: 50px;
      margin-left: 3px;
    }

     h2 {
       color: #FFFFFF;
       margin-top: 30px;
       text-align: center;
     }

     img {
       width: 190px;
       height: 150px;
       margin-left: 70px;
       margin-top: -5px;
       position: absolute;

     }

     .btn {
      --background: #BD646E;
      margin-top: 145px;
      margin-left: 80px;
      font-size: 14px;
      width: 185px;
      height: 40px;
      color: #FFFFFF;
    }

     .textquiz {
      color: #FFFFFF;
      margin-top: 10px;
      text-align: center;
      font-size: auto;
     }
    
    .textcard {
      color: #FFFFFF;
      text-align: center;
      font-weight: 300;
      font-size: 20px;
      margin-top: 12px;
    }

</style>

