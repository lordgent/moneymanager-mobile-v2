import React, { useState } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add, remove, cash, card } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./AddTypeModal.css";

const AddTypeModal: React.FC = () => {
  const [fabOpen, setFabOpen] = useState(false);
  const history = useHistory(); // INI BERFUNGSI untuk React Router v5

  return (
    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      {fabOpen && (
        <>
          <IonFabButton
            className="fab-child income"
            onClick={() => history.push("/add-income")}
          >
            <IonIcon icon={cash} />
          </IonFabButton>
          <IonFabButton
            className="fab-child expense"
            onClick={() => history.push("/add-expense")}
          >
            <IonIcon icon={card} />
          </IonFabButton>
        </>
      )}

      <IonFabButton onClick={() => setFabOpen(!fabOpen)} className="fab-main">
        <IonIcon icon={fabOpen ? remove : add} />
      </IonFabButton>
    </IonFab>
  );
};

export default AddTypeModal;
