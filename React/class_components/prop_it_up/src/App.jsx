import logo from './logo.svg';
import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
    {/* information you pass down to a component is called props */}
      <PersonCard fname = {"Jane"} lname = {"Doe"} age = {45} hairColor = {"Black"}></PersonCard>
      <hr />
      <PersonCard fname = {"John"} lname = {"Smith"} age = {88} hairColor = {"Brown"}></PersonCard>
      <hr />
      <PersonCard fname = {"Fillmore"} lname = {"Millard"} age = {50} hairColor = {"Brown"}></PersonCard>
      <hr />
      <PersonCard fname = {"Maria"} lname = {"Smith"} age = {62} hairColor = {"Brown"}></PersonCard>
      <hr />
    </div>
  );
}

export default App;
