import { IonRow, IonCol, IonTitle, IonToolbar, IonButton, IonHeader } from '@ionic/react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const history = useHistory();

    function loginButton() {
        history.push('/login')
    }
    function registerButton() {
        history.push('/register')
    }

    return (
        <IonHeader>
            <IonToolbar className="container-fluid">
                <IonRow>
                    <IonCol>
                        <IonTitle>PT Indolima Perkasa</IonTitle>
                    </IonCol>
                    <IonButton onClick={loginButton}>Login</IonButton>
                    <IonButton onClick={registerButton}>Register</IonButton>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}