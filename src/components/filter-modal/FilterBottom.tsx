import {
  IonModal,
  IonButton,
  IonContent,
  IonIcon
} from '@ionic/react';
import { useState } from 'react';
import { chevronForwardOutline } from 'ionicons/icons';
import './FilterBottom.css';

const filterTypes = ['Income', 'Expense', 'Transfer'];
const sortTypes = ['Highest', 'Lowest', 'Newest', 'Oldest'];

const FilterBottom: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeFilter, setActiveFilter] = useState('Expense');
  const [activeSort, setActiveSort] = useState('Newest');

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="bottom-sheet" backdropDismiss>
      <IonContent>
        <div className="filter-container">
          <div className="drag-indicator" />

          <div className="filter-header">
            <span className="title">Filter Transaction</span>
            <button className="reset-btn" onClick={() => {
              setActiveFilter('Expense');
              setActiveSort('Newest');
            }}>Reset</button>
          </div>

          <div className="section">
            <label>Filter By</label>
            <div className="btn-group">
              {filterTypes.map(type => (
                <button
                  key={type}
                  className={`pill ${activeFilter === type ? 'active' : ''}`}
                  onClick={() => setActiveFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <label>Sort By</label>
            <div className="btn-group">
              {sortTypes.map(type => (
                <button
                  key={type}
                  className={`pill ${activeSort === type ? 'active' : ''}`}
                  onClick={() => setActiveSort(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <label>Category</label>
            <div className="category-row">
              <span>Choose Category</span>
              <span className="selected-count">0 Selected</span>
              <IonIcon icon={chevronForwardOutline} />
            </div>
          </div>

          <IonButton expand="block" className="apply-btn" onClick={onClose}>
            Apply
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default FilterBottom;