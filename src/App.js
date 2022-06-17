import './App.css';

import { useEffect, useState } from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';
import { Header } from './components/Header'
import { List } from './components/List';
import { Footer } from './components/Footer';

import { AiFillRightCircle, AiFillDollarCircle } from 'react-icons/ai';

import { getEntries as loadEntries } from './util/handleEntries';
import { formConfig } from './formConfig';

function App() {

  const [incomeValue, setIncomeValue] = useState(0);
  const [expenseValue, setExpenseValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [entries, setEntries] = useState(loadEntries());

  //ao montar, atualiza a lista com as entradas carregadas do LocalStorage
  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  //atualiza valores de cards ao atualizar dados
  useEffect(() => {
    let newIncome = entries.filter(entry => entry.type === 'Entrada').reduce((acc, entry) => acc + Number(entry.amount), 0)
    let newExpense = entries.filter(entry => entry.type === 'Saída').reduce((acc, entry) => acc + Number(entry.amount), 0)
    setIncomeValue(newIncome.toFixed(2).replace('.', ','));
    setExpenseValue(newExpense.toFixed(2).replace('.', ','));
    setTotalValue((newIncome - newExpense).toFixed(2).replace('.', ','));
  }, [entries])

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="cardContainer">
          <Card
            title="Entradas"
            type="income"
            icon={
              <AiFillRightCircle
                className="income iconIncome"
              />}
            value={incomeValue}
          />
          <Card
            title="Saídas"
            type="expense"
            icon={
              <AiFillRightCircle
                className="expense iconExpense"
              />}
            value={expenseValue}
          />
          <Card
            title="Total"
            icon={
              <AiFillDollarCircle
              />}
            value={totalValue}
          />
        </div>
        <Form
          setEntries={setEntries}
          config={formConfig} />
        <List
          headers={["Descrição", "Valor", "Tipo", "Referência"]}
          entries={entries}
          setEntries={setEntries} />
      </div>
      <Footer text="© 2022 Victor Hugo Garcia de Farias" />

    </div>
  );
}

export default App;
