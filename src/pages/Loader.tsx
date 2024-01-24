import { IonSpinner } from '@ionic/react'
import React from 'react'
import "./Loader.css"

const Loader : React.FC = () => {
  return (
    <IonSpinner>
      Loading...
    </IonSpinner>
  )
}

export default Loader