import React, { ReactElement } from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react'
import './AlbumCard.css'

// Definición de las propiedades del componente AlbumCard
interface AlbumCardProps {
  title: string
  description: string
}

/**
 * AlbumCard
 * @param {AlbumCardProps} props Título y descripción del componente AlbumCard
 * @returns {ReactElement} Componente AlbumCard
 */
const AlbumCard: React.FC<AlbumCardProps> = ({ title, description }: AlbumCardProps): ReactElement => {
  return (
    <IonCard className='album-card ion-padding'>
      <IonCardHeader>
        {/* Renderiza el título del álbum */}
        <IonCardTitle className='ion-text-center'>{title}</IonCardTitle>
        {/* Renderiza la descripción del álbum */}
        <IonCardSubtitle className='ion-text-center'>{description}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className='ion-padding'>
        <div className='button-container'>
          {/* Renderiza el botón de llamada principal a la acción */}
          <IonButton className='ion-padding-vertical' color='primary' size='small'>
            Main call to action
          </IonButton>
          {/* Renderiza el botón de acción secundaria */}
          <IonButton className='ion-padding-vertical' color='medium' size='small'>
            Secondary action
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default AlbumCard
