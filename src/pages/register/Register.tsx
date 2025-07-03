import {
  IonButton,
  IonContent,
  IonPage,
  IonSpinner,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { registerUser } from "../../store/reducers/auth/AuthSlice";
import "./Register.css";

const Register: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { status, error, token } = useSelector((state: RootState) => state.auth);

  const handleRegister = () => {
    dispatch(registerUser({ fullName, email, phoneNumber, password }));
  };

  useEffect(() => {
    if (status === "succeeded" && token) {
      history.push({
        pathname: "/send-otp",
        state: { email },
      });
    }
  }, [status, token, history, email]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding login-bg">
        <div className="login-wrapper">
          <div className="login-card">
            <h2 className="login-title">Create Account</h2>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div className="card-input">
              <label>Fullname</label>
              <input
                className="input"
                type="text"
                value={fullName}
                onChange={(e) =>
                  setFullName((e.target as HTMLInputElement).value)
                }
              />
            </div>

            <div className="card-input">
              <label>Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              />
            </div>

            <div className="card-input">
              <label>Phone Number</label>
              <input
                className="input"
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber((e.target as HTMLInputElement).value)
                }
              />
            </div>

            <div className="card-input">
              <label>Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword((e.target as HTMLInputElement).value)
                }
              />
            </div>

            <IonButton
              expand="block"
              className="login-button ion-margin-top"
              onClick={handleRegister}
              disabled={status === "loading"}
            >
              {status === "loading" ? <IonSpinner name="dots" /> : "Register"}
            </IonButton>

            <div className="login-links ion-margin-top">
              <span className="link-text" onClick={() => history.push("/login")}>
                Already have an account? Login
              </span>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
