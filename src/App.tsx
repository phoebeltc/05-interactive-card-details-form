import React from 'react';
import './styles/index.scss'
import Form from './components/form/Form';
import Card from './components/card/Card';
import styles from './styles/App.module.scss';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
    <div className={styles.component}>
    <Card />
    <Form />
    </div>
    </DataProvider>
  );
}

export default App;
