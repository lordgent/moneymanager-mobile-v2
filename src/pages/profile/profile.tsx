import {
  IonContent,
  IonPage,
  IonIcon,
  IonLabel,
  IonList,
} from "@ionic/react";
import {
  logOutOutline,
  personCircleOutline,
  settingsOutline,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";
import "./profile.css";

const Profile: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🔐 Hapus token
    history.push("/login");           // 🔄 Redirect ke login
  };

  return (
    <IonPage>
      <IonContent fullscreen className="profile-content">
        <MobileLayout>
          <div className="profile-header">
            <div className="avatar-medium"></div>
            <div>
              <div className="profile-name">John Doe</div>
              <div className="profile-email">johndoe@email.com</div>
            </div>
          </div>

          <IonList className="icon-list">
            <div className="icon-item">
              <IonIcon className="icon" icon={personCircleOutline} />
              <IonLabel>Edit Profile</IonLabel>
            </div>
            <div className="icon-item">
              <IonIcon className="icon" icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </div>
            <div className="icon-item" onClick={handleLogout}>
              <IonIcon className="icon" icon={logOutOutline} />
              <IonLabel color="danger">Logout</IonLabel>
            </div>
          </IonList>
        </MobileLayout>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
