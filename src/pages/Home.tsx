import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nextflow Counter (React)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 style={{
          textAlign: 'center',
          fontSize: '100px'
        }}>0</h1>
      </IonContent>
      <IonFooter className="ion-padding">
          <IonButton expand="block">Increase</IonButton>
          <IonButton expand="block">Decrease</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
