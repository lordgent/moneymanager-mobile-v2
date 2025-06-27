import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./budget.css";

const Budget: React.FC = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState("June");

  const handlePrev = () => {
    const index = months.indexOf(selectedMonth);
    if (index > 0) setSelectedMonth(months[index - 1]);
  };

  const handleNext = () => {
    const index = months.indexOf(selectedMonth);
    if (index < months.length - 1) setSelectedMonth(months[index + 1]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Budget</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="budget-content">
        <div className="budget-wrapper">
          <div className="month-header">
            <button onClick={handlePrev} className="month-nav">←</button>
            <div className="month-title">{selectedMonth}</div>
            <button onClick={handleNext} className="month-nav">→</button>
          </div>

          <div className="budget-empty">
            <div className="empty-title">No Budget Created</div>
            <div className="empty-subtitle">
              You haven't added any monthly budget yet.
            </div>
          </div>
        </div>

        <div className="create-button-wrapper">
          <IonButton expand="block" className="create-budget-btn">
            Create a budget
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Budget;
