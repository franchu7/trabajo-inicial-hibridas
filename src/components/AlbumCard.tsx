import React from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonCol, IonRow } from '@ionic/react'
import './AlbumCard.css'

interface AlbumCardProps {
  title: string
  description: string
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, description }) => {
  return (
    <IonCard className='album-card ion-padding'>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>{title}</IonCardTitle>
        <IonCardSubtitle className='ion-text-center'>{description}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className='ion-padding'>
        <div className='button-container'>
          <IonButton className='ion-padding-vertical' color='primary' size='small'>
            Main call to action
          </IonButton>
          <IonButton className='ion-padding-vertical' color='medium' size='small' >
            Secondary action
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default AlbumCard
