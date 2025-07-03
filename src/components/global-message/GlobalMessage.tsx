// src/components/GlobalMessage.tsx
import {
  IonModal,
  IonContent,
  IonButton,
  IonText,
} from "@ionic/react";
import "./GlobalMessage.css";

interface GlobalMessageProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const GlobalMessage: React.FC<GlobalMessageProps> = ({ isOpen, message, onClose }) => {
  return (
<IonModal isOpen={isOpen} onDidDismiss={onClose} className="global-message-modal">
  <div className="global-message-box">
    <IonText>
      <h3 className="global-message-text">{message}</h3>
    </IonText>
    <IonButton
      expand="block"
      className="global-message-button"
      onClick={onClose}
    >
      OK
    </IonButton>
  </div>
</IonModal>

  );
};

export default GlobalMessage;
