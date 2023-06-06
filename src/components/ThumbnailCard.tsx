import React from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonThumbnail } from '@ionic/react'
import './ThumbnailCard.css'

interface ThumbnailCardProps {
  imageSrc: string
  description: string
  time: string
}

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ imageSrc, description, time }) => {
  return (
    <IonCard>
      <IonThumbnail className='thumbnail-image'>
        <img src={imageSrc} alt='Thumbnail' />
      </IonThumbnail>

      <IonCardHeader>
        <IonCardSubtitle>{description}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonButton color={'light'}>View</IonButton>
        <IonButton color={'light'}>Edit</IonButton>
        <p>{time}</p>
      </IonCardContent>
    </IonCard>
  )
}

export default ThumbnailCard
