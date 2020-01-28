import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const Home: React.FC = () => {

  const [counter, setNewCounter] = useState(0);

  const increaseValue = () => {
    setNewCounter(counter+1);
  }

  const decreaseValue = () => {

    let newValue = counter - 1;

    if(newValue <= 0) {
      setNewCounter(0);
    } else {
      setNewCounter(newValue);
    }

  }


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
        }}>{counter}</h1>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonButton expand="block" onClick={increaseValue}>Increase</IonButton>
        <IonButton expand="block" onClick={decreaseValue}>Decrease</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
