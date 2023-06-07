import { IonApp, IonCol, IonContent, IonGrid, IonPage, IonRow, setupIonicReact } from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import AlbumCard from './components/AlbumCard'
import ThumbnailCard from './components/ThumbnailCard'
import './App.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <AlbumCard
                title='Album example'
                description='Something short and leading about the collection bellow--its contents, the creator, etc. Make it short and sweet, but not too short so folks dont simply skip over entirely.'
              />
            </IonCol>
          </IonRow>

          <IonRow className='thumbnails-row'>
            <IonCol size-lg='4' size-md='6' size-sm='6' size-xs='12'>
              <ThumbnailCard
                imageSrc='imgs/smiley.png'
                description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                time='9 mins'
              />
            </IonCol>
            <IonCol size-lg='4' size-md='6' size-sm='6' size-xs='12'>
              <ThumbnailCard
                imageSrc='imgs/sad.png'
                description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                time='9 mins'
              />
            </IonCol>
            <IonCol size-lg='4' size-md='6' size-sm='6' size-xs='12'>
              <ThumbnailCard
                imageSrc='imgs/angry.png'
                description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                time='9 mins'
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  </IonApp>
)

export default App
