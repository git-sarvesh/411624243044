import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import AtomicHabits from './components/AtomicHabits';
import TheAlchemist from './components/TheAlchemist';
import RichDadPoorDad from './components/RichDadPoorDad';
import ThinkAndGrowRich from './components/ThinkAndGrowRich';
import ThePsychologyOfMoney from './components/ThePsychologyOfMoney';
import DeepWork from './components/DeepWork';
import Authors from './components/Authors';
import JamesClear from './components/JamesClear';
import PauloCoelho from './components/PauloCoelho';
import RobertKiyosaki from './components/RobertKiyosaki';
import NapoleonHill from './components/NapoleonHill';
import MorganHousel from './components/MorganHousel';
import CalNewport from './components/CalNewport';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/atomic-habits" element={<AtomicHabits />} />
        <Route path="/books/the-alchemist" element={<TheAlchemist />} />
        <Route path="/books/rich-dad-poor-dad" element={<RichDadPoorDad />} />
        <Route path="/books/think-and-grow-rich" element={<ThinkAndGrowRich />} />
        <Route path="/books/the-psychology-of-money" element={<ThePsychologyOfMoney />} />
        <Route path="/books/deep-work" element={<DeepWork />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/james-clear" element={<JamesClear />} />
        <Route path="/authors/paulo-coelho" element={<PauloCoelho />} />
        <Route path="/authors/robert-kiyosaki" element={<RobertKiyosaki />} />
        <Route path="/authors/napoleon-hill" element={<NapoleonHill />} />
        <Route path="/authors/morgan-housel" element={<MorganHousel />} />
        <Route path="/authors/cal-newport" element={<CalNewport />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;