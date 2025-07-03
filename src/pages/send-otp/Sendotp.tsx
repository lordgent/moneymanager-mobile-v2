import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./SendOtp.css";

const SendOtp: React.FC = () => {
  const [otp, setOtp] = useState("");
  const history = useHistory();
  const location = useLocation();

  const email = (location.state as any)?.email || "your@email.com";

  const handleVerify = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found. Please login/register first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/verification-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Verification successful!");
        history.push("/tab1"); // Ganti ke halaman tujuan setelah verifikasi berhasil
      } else {
        alert("Verification failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-bg">
        <div className="login-wrapper">
          <div className="login-card">
            <div className="login-title">Enter Verification Code</div>
            <IonText color="medium">
              <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "24px" }}>
                We sent a 6-digit code to <b>{email}</b>
              </p>
            </IonText>

            <IonItem className="login-item">
              <IonLabel position="floating">Verification Code</IonLabel>
              <IonInput
                type="text"
                maxlength={6}
                value={otp}
                onIonChange={(e) => setOtp(e.detail.value!)}
              />
            </IonItem>

            <IonButton expand="block" className="login-button" onClick={handleVerify}>
              Verify
            </IonButton>

            <div className="login-links">
              <span className="link-text" onClick={() => console.log("Resend clicked")}>
                Resend Code
              </span>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SendOtp;
