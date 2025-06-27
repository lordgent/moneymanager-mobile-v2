import { IonContent, IonPage } from "@ionic/react";
import MobileLayout from "../components/MobileLayout";
import MonthSelect from "../components/month-dropdown/MonthSelect";
import { useState } from "react";
import "./Tab2.css";
import TransactionItem from "../components/item-transaction/TransactionItem";
import FilterBottom from "../components/filter-modal/FilterBottom";

const Tab2: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <MobileLayout>
          <div className="transaction-header">
            <MonthSelect
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            />
            <button className="filter-button" onClick={() => setOpenFilter(true)}>
              <img src="/icons/sort.svg" alt="filter" />
            </button>
          </div>

          <div className="report-banner">
            <span>See your financial report</span>
            <img src="/icons/arrow-right.svg" alt="filter" />
          </div>

          <div className="section">
            <h4>Today</h4>
            <TransactionItem
              icon="/icons/food.svg"
              color="#FCEED4"
              title="Shopping"
              subtitle="Buy some grocery"
              amount="- $120"
              time="10:00 AM"
              amountColor="red"
            />
            <TransactionItem
              icon="/icons/food.svg"
              color="#EEE5FF"
              title="Subscription"
              subtitle="Disney+ Annual.."
              amount="- $80"
              time="03:30 PM"
              amountColor="red"
            />
            <TransactionItem
              icon="/icons/food.svg"
              color="#FDD5D7"
              title="Food"
              subtitle="Buy a ramen"
              amount="- $32"
              time="07:30 PM"
              amountColor="red"
            />
          </div>

          <div className="section">
            <h4>Yesterday</h4>
            <TransactionItem
              icon="/icons/food.svg"
              color="#D3F8DF"
              title="Salary"
              subtitle="Salary for July"
              amount="+ 5000"
              time="04:30 PM"
              amountColor="green"
            />
            <TransactionItem
              icon="/icons/food.svg"
              color="#BDDCFF"
              title="Transportation"
              subtitle="Charging Tesla"
              amount="- $18"
              time="08:30 PM"
              amountColor="red"
            />
          </div>
              <FilterBottom isOpen={openFilter} onClose={() => setOpenFilter(false)} />

        </MobileLayout>
      </IonContent>

    </IonPage>
  );
};

export default Tab2;
