import React, { ReactElement } from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonThumbnail } from '@ionic/react'
import './ThumbnailCard.css'

// Definición de las propiedades del componente ThumbnailCard
interface ThumbnailCardProps {
  imageSrc: string
  description: string
  time: string
}

/**
 * Definición del componente ThumbnailCard como una función de componente de React
 * @param {ThumbnailCardProps} props Imagen, descripción y tiempo de lectura del componente ThumbnailCard
 * @returns {ReactElement} Componente ThumbnailCard
 */
const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ imageSrc, description, time }: ThumbnailCardProps): ReactElement => {
  return (
    <IonCard>
      {/* Renderiza la miniatura con la imagen proporcionada */}
      <IonThumbnail className='thumbnail-image'>
        <img src={imageSrc} alt='Thumbnail' />
      </IonThumbnail>

      <IonCardHeader>
        {/* Renderiza el subtítulo de la miniatura */}
        <IonCardSubtitle className='thumbail-subtitle'>{description}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        {/* Renderiza los botones de "View" y "Edit" */}
        <IonButton color={'light'}>View</IonButton>
        <IonButton color={'light'}>Edit</IonButton>
        {/* Renderiza el tiempo de lectura */}
        <p className='ion-float-end'>{time}</p>
      </IonCardContent>
    </IonCard>
  )
}

export default ThumbnailCard
