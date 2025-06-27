import React from "react";
import {
  IonContent,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import MobileLayout from "../components/MobileLayout";
import SpendingChart from "../components/SpendingChart";
import MonthSelect from "../components/month-dropdown/MonthSelect";

const Tab1: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = React.useState("October");
  const [range, setRange] = React.useState<"today" | "week" | "month" | "year">("week");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="home-content">
        <MobileLayout>
          <div className="header-section">
            <div className="header-row">
              <div className="avatar"></div>
              <MonthSelect
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              />
              <img src="/icons/notifiaction.svg" alt="notif" className="notif" />
            </div>

            <div className="balance-label">Account Balance</div>
            <div className="balance-amount">$9400</div>

            <div className="summary-box">
              <div className="income-box">
                <img src="/icons/income.svg" className="icon-box" alt="income" />
                <div>
                  <div className="label">Income</div>
                  <div className="amount">$5000</div>
                </div>
              </div>
              <div className="expense-box">
                <img src="/icons/expense.svg" className="icon-box" alt="expense" />
                <div>
                  <div className="label">Expenses</div>
                  <div className="amount">$1200</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Statistik pengeluaran</div>

            {/* Segment Range Picker */}
        <div className="segment-wrapper">
          <IonSegment scrollable value={range} onIonChange={(e) => setRange(e.detail.value as any)}>
            <IonSegmentButton value="today">
              <IonLabel>Today</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="week">
              <IonLabel>Week</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="month">
              <IonLabel>Month</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="year">
              <IonLabel>Year</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

            {/* Chart */}
            <SpendingChart range={range} />
          </div>

          <div className="section">
            <div className="section-title-row">
              <div className="section-title">Recent Transaction</div>
              <IonButton fill="clear" className="see-all-button">
                See All
              </IonButton>
            </div>

            <div className="transaction-list">
              {/* Item 1 */}
              <div className="transaction-item">
               <img src="/icons/food.svg" alt="food" />
                <div className="transaction-info">
                  <div className="title">Shopping</div>
                  <div className="subtitle">Buy some grocery</div>
                </div>
                <div className="transaction-amount">- $120</div>
                <div className="transaction-time">10:00 AM</div>
              </div>
              {/* Item 2 */}
              <div className="transaction-item">
                <img src="/icons/food.svg" alt="food" />
                <div className="transaction-info">
                  <div className="title">Subscription</div>
                  <div className="subtitle">Disney+ Annual</div>
                </div>
                <div className="transaction-amount">- $80</div>
                <div className="transaction-time">03:30 PM</div>
              </div>
              {/* Item 3 */}
              <div className="transaction-item">
                <img src="/icons/food.svg" alt="food" />
                <div className="transaction-info">
                  <div className="title">Food</div>
                  <div className="subtitle">Buy a ramen</div>
                </div>
                <div className="transaction-amount">- $32</div>
                <div className="transaction-time">07:30 PM</div>
              </div>
            </div>
          </div>
        </MobileLayout>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
