<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-row class="ion-justify-content-between">
          <ion-col size="5">
            <ion-title>Kolam</ion-title>
          </ion-col>
          <ion-col size="3">
            <ion-icon src="img/Sorting.svg"></ion-icon>
            <ion-icon src="img/Vector.svg"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kolam</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list lines="none">
          <ion-item>
            <ion-label style="margin-top: 500px">
              <ion-card color="dark">
                <ion-card-header style="padding: 14px">
                  <ion-item color="dark">
                    <ion-label slot="start" style="font-size: 20px">Alfa</ion-label>
                    <ion-button slot="end" size="small" color="success" style="font-weight: 400">Aktif</ion-button>
                  </ion-item>
                </ion-card-header>
                <ion-card-content style="padding-bottom: 1%">
                  <ion-grid>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar+.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">01-09-2022</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">90 hari</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/fish.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">200 Ekor</p></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-card color="dark">
                <ion-card-header style="padding: 14px">
                  <ion-item color="dark">
                    <ion-label style="font-size: 20px">Beta</ion-label>
                    <ion-button slot="end" size="small" color="danger" style="font-weight: 400">Tidak Aktif</ion-button>
                  </ion-item>
                </ion-card-header>
                <ion-card-content style="padding-bottom: 1%">
                  <ion-grid>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar+.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">01-09-2022</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">90 hari</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/fish.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">200 Ekor</p></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-card color="dark">
                <ion-card-header style="padding: 14px">
                  <ion-item color="dark">
                    <ion-label slot="start" style="font-size: 20px">Carlie</ion-label>
                    <ion-button slot="end" size="small" color="success" style="font-weight: 400">Aktif</ion-button>
                  </ion-item>
                </ion-card-header>
                <ion-card-content style="padding-bottom: 1%">
                  <ion-grid>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar+.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">01-09-2022</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">90 hari</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/fish.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">200 Ekor</p></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-card color="dark">
                <ion-card-header style="padding: 14px">
                  <ion-item color="dark">
                    <ion-label slot="start" style="font-size: 20px">Delta</ion-label>
                    <ion-button slot="end" size="small" color="success" style="font-weight: 400">Aktif</ion-button>
                  </ion-item>
                </ion-card-header>
                <ion-card-content style="padding-bottom: 1%">
                  <ion-grid>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar+.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">01-09-2022</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">90 hari</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/fish.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">200 Ekor</p></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label style="margin-bottom: 80px">
              <ion-card color="dark">
                <ion-card-header style="padding: 14px">
                  <ion-item color="dark">
                    <ion-label slot="start" style="font-size: 20px">Epsilon</ion-label>
                    <ion-button slot="end" size="small" color="success" style="font-weight: 400">Aktif</ion-button>
                  </ion-item>
                </ion-card-header>
                <ion-card-content style="padding-bottom: 1%">
                  <ion-grid>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar+.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">01-09-2022</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/calendar.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">90 hari</p></ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-start">
                      <ion-col size="1"><ion-icon src="img/fish.svg"></ion-icon></ion-col>
                      <ion-col size="1"></ion-col>
                      <ion-col size="auto"><p class="text1">200 Ekor</p></ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="tertiary" style="font-size: 60px; font-weight: 450; margin:10px;">+</ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSecond",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap%27%27");

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-list {
  background-color: #121212;
}

template {
  font-family: "Poppins";
}

ion-icon {
  font-size: 24px;
}
ion-fab-button ion-icon {
  font-size: 30px;
  font-weight: 900;
}
ion-card {
  border-radius: 20px;
  margin: 2%;
}
ion-card ion-item ion-label {
  font-family: "Poppins", sans-serif !important;
  color: #000000 !important;
  font-weight: 600;
  margin: 0%;
  font-size: 50px;
}
.text1 {
  font-family: "Poppins", sans-serif !important;
  color: #000000 !important;
}
ion-card-header ion-item {
  padding-right: 0px;
  padding-bottom: 2px;
  margin-left: 3px;
  margin-right: 3px;
  border-bottom: 3px black solid;
}

ion-grid ion-row ion-col {
  padding: 0%;
}

ion-toolbar ion-row ion-col ion-icon {
  padding-right: 6px;
}
</style>
