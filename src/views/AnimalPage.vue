<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" size = "large" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text"> สัตว์ </h1>
      </div>

      
      <ion-grid fixed>
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/giraffe.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Cháng jǐng lù (ยีราฟ)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/ant.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Mǎ yǐ (มด)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/bear.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Xióng(หมี)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/bird.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Yīng wǔ(นกแก้ว)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/butterfly.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Hú dié(ผีเสื้อ)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/elephant.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Dà xiàng(ช้าง)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/hen.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Jī (ไก่)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/lion.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Shī zi (สิงโต)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/panda.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Xióng māo(หมีแพนด้า)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/pig.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Zhū (หมู)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-card>
                <img src="../assets/rabbit.png">
                <div class="btn">
                  <ion-icon :src = "volumeMediumOutline" ></ion-icon>
                </div>
                <h2>Tùzǐ (กระต่าย)</h2>
              </ion-card>
            </ion-col>
          </ion-row>

        </ion-grid>

        
     
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol,IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronBack, volumeMediumOutline } from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  name: 'FoodPage',
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
  }, setup () {
    return {
      chevronBack,
      volumeMediumOutline
    }
  },
   data() {
    return {
      greetingSpeech: new SpeechSynthesisUtterance(),
      info: []
    };
  },
  mounted (){
    axios.get('')
    .then(response => {
        this.info = response.data
        console.log(response)
      })
  },
  methods: {
    active(infonew: { name: string; }) {
      console.log("infonew", infonew);
      this.greetingSpeech.text = infonew.name;
      speechSynthesis.speak(this.greetingSpeech);
    },
  },
});
</script>

<style scoped>
  ion-content {
  --ion-background-color: rgba(144, 115, 41, 0.59);
}

.top-section{
  height: 150px;
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

ion-grid {
  margin-top: -139px;
}

ion-card{
    background-color: #30323a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 95%;
    height: 200px;
    border-radius: 20px;
    margin: 1px 1px;
    margin-left: 3px;
}

img {
       width: 90px;
       height: 90px;
       align-items: center;
       margin-top: 20px;
   }

.btn {
    background-color: #FF8A00;
    border: none;
    color: rgb(7, 7, 7);
    padding: 4px 6px;
    font-size: 27px;
    width: 38px;
    height: 38px;
    align-items: center;
    margin-top: 20px;
    border-radius: 50px;
   }

   h2 {
     font-size: 23px;
     color: aliceblue;
     text-align: center;
     margin-top: 10px;
   }



</style>

