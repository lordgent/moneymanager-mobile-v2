import { useState } from "react";
import {
  IonPage,
  IonContent,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import "./AddIncome.css";
import MobileLayout from "../../components/MobileLayout";

const AddIncome: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <IonPage>
      <IonHeader className="expense-header">
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBack} />
          </IonButtons>
          <IonTitle>Add Income</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="expense-content">
        <MobileLayout>
          <div className="amount-section">
            <label className="label">How much?</label>
            <div className="amount-input">
              <input type="text" placeholder="Rp0" />
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Category</label>
              <select>
                <option value="subscription">Subscription</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea rows={3} placeholder="Enter description..."></textarea>
            </div>

            <div className="form-group">
              <label>Upload Foto</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => setImage(reader.result as string);
                    reader.readAsDataURL(file);
                  }
                }}
              />

              {image && (
                <div className="image-preview">
                  <img src={image} alt="Preview" />
                </div>
              )}
            </div>
          </div>
        </MobileLayout>
        <div className="fixed-footer">
          <IonButton expand="block" className="continue-button" color="tertiary">
            Continue
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddIncome;
