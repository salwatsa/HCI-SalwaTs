<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Kolam</ion-card-subtitle>
                <ion-card-title>10</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Kolam Aktif</ion-card-subtitle>
                <ion-card-title>8</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Ikan Hidup</ion-card-subtitle>
                <ion-card-title>182 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Ikan Mati</ion-card-subtitle>
                <ion-card-title>89 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Panen 2022</ion-card-subtitle>
                <ion-card-title>109 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Total Pakan</ion-card-subtitle>
                <ion-card-title>223 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-title>TOTAL BERAT IKAN</ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <img alt="Silhouette of mountains" src="https://www.freeiconspng.com/uploads/purple-fish-png-17.png" />
              <ion-card-header>
                <ion-card-subtitle>LELE</ion-card-subtitle>
                <ion-card-subtitle class="bluee">200 Kg</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="hi">
              <img alt="Silhouette of mountains" src="https://www.freeiconspng.com/uploads/purple-fish-png-17.png" />
              <ion-card-header class="hi" >
                <ion-card-subtitle>NILA MERAH</ion-card-subtitle>
                <ion-card-subtitle class="bluee">200 Kg</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-title>KUALITAS AIR</ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>pH</ion-card-title>
                <ion-card-subtitle>Normal <span>6 Kolam</span> </ion-card-subtitle>
                <ion-card-subtitle>Abnormal <span>6 Kolam</span> </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>DO</ion-card-title>
                <ion-card-subtitle>Normal <span>6 Kolam</span> </ion-card-subtitle>
                <ion-card-subtitle>Abnormal <span>6 Kolam</span> </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
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


ion-card {
  background-color: aliceblue;
}

ion-card-subtitle {
  color: black;
}

ion-card-title {
  color: black;
  font-weight: bold;
}

ion-content {
  background-color: blue;
}

:root {
	--ion-color-new: #5ab2d8;
	--ion-color-new-rgb: 90,178,216;
	--ion-color-new-contrast: #000000;
	--ion-color-new-contrast-rgb: 0,0,0;
	--ion-color-new-shade: #4f9dbe;
	--ion-color-new-tint: #6bbadc;
}

.ion-color-new {
	--ion-color-base: var(--ion-color-new);
	--ion-color-base-rgb: var(--ion-color-new-rgb);
	--ion-color-contrast: var(--ion-color-new-contrast);
	--ion-color-contrast-rgb: var(--ion-color-new-contrast-rgb);
	--ion-color-shade: var(--ion-color-new-shade);
	--ion-color-tint: var(--ion-color-new-tint);
}

.bluee {
  color: cornflowerblue; 
  font-weight: bold; 
  font-size: larger;
}

span {
  color: rgb(51, 108, 212);
}

ion-col {
  padding: 0;
}

</style>
