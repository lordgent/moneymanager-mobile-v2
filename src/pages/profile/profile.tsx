import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonAvatar,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
} from "@ionic/react";
import {
  logOutOutline,
  personCircleOutline,
  settingsOutline,
} from "ionicons/icons";
import MobileLayout from "../../components/MobileLayout";
import "./profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="profile-content">
        <MobileLayout>
          <div className="profile-header">
            <div className="avatar-medium"></div>
            <div>
                <div className="profile-name">John Doe</div>
            <div className="profile-email">johndoe@email.com</div>
            </div>
          </div>

          <IonList>
            <IonItem button>
              <IonIcon icon={personCircleOutline} slot="start" />
              <IonLabel>Edit Profile</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={settingsOutline} slot="start" />
              <IonLabel>Settings</IonLabel>
            </IonItem>
            <IonItem button lines="none">
              <IonIcon icon={logOutOutline} slot="start" />
              <IonLabel color="danger">Logout</IonLabel>
            </IonItem>
          </IonList>
        </MobileLayout>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
