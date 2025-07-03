import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import GlobalMessage from "../../components/global-message/GlobalMessage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchBalance } from "../../store/reducers/profile/ProfileSlice";

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const showMessage = (text: string) => {
    setMessageText(text);
    setMessageOpen(true);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (data.data?.token) {
          localStorage.setItem("token", data.data.token);
        }

        showMessage("Login successful!");
        setTimeout(() => {
          dispatch(fetchBalance());
          history.push({
            pathname: "/",
            state: { email },
          });
        }, 2000);
      } else {
        showMessage("Login failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      showMessage("Network error: " + error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding login-bg">
        <div className="login-wrapper">
          <div className="login-card">
            <h2 className="login-title">Welcome Back</h2>

            <div className="card-input">
              <label style={{ fontSize: "17px", marginBottom: "4px" }}>
                Email
              </label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              />
            </div>

            <div className="card-input">
              <label style={{ fontSize: "17px", marginBottom: "4px" }}>
                Password
              </label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword((e.target as HTMLInputElement).value)
                }
              />
              <p className="forgot">Forgot password?</p>
            </div>

            <IonButton
              expand="block"
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </IonButton>

            <div className="login-links ion-margin-top">
              <span
                className="link-text"
                onClick={() => history.push("/register")}
              >
                Don't have an account? Register
              </span>
            </div>
          </div>
        </div>

        {/* Global message modal */}
        <GlobalMessage
          isOpen={messageOpen}
          message={messageText}
          onClose={() => setMessageOpen(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
