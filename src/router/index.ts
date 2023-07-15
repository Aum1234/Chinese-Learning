import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuPage from '../views/MenuPage.vue';
import StartPage from '../views/StartPage.vue';
import ConversationPage from '../views/ConversationPage.vue';
import VocabularyPage from '../views/VocabularyPage.vue';
import StartquizPage from '../views/StartquizPage.vue';
import AnimalPage from '../views/AnimalPage.vue';
import QuizPage from '../views/QuizPage.vue';
import FoodPage from '../views/FoodPage.vue';
import PlacePage from '../views/PlacePage.vue';
import OccupationPage from '../views/OccupationPage.vue';
import ImportantdatesPage from '../views/ImportantdatesPage.vue';
import GreetingPage from '../views/GreetingPage.vue';
import IntroduceyourselfPage from '../views/IntroduceyourselfPage.vue';
import AskagePage from '../views/AskagePage.vue';
import LearningPage from '../views/LearningPage.vue';
import FamilyPage from '../views/FamilyPage.vue';
import ShoppingPage from '../views/ShoppingPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Start',
  },
  {
    path: '/start',
    name: 'Start',
    component: StartPage,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/conversation',
    name: 'Conversation',
    component: ConversationPage,
  },
  {
    path: '/vocabulary',
    name: 'Vocabulary',
    component: VocabularyPage,
  },
  {
    path: '/startquiz',
    name: 'Startquiz',
    component: StartquizPage,
  },
  {
    path: '/animal',
    name: 'Animal',
    component: AnimalPage,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizPage,
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodPage,
  },
  {
    path: '/place',
    name: 'Place',
    component: PlacePage,
  },
  {
    path: '/occupation',
    name: 'Occupation',
    component: OccupationPage,
  },
  {
    path: '/importantdates',
    name: 'Importantdates',
    component: ImportantdatesPage,
  },
  {
    path: '/greeting',
    name: 'Greeting',
    component: GreetingPage,
  },
  {
    path: '/introduceyourself',
    name: 'Introduceyourself',
    component: IntroduceyourselfPage,
  },
  {
    path: '/askage',
    name: 'Askage',
    component: AskagePage,
  },
  {
    path: '/learning',
    name: 'Learning',
    component: LearningPage,
  },
  {
    path: '/family',
    name: 'Family',
    component: FamilyPage,
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: ShoppingPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
