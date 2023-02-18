import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Header/>
      <Search setSearch={setSearch}/>
      <Main search={search}/>
    </div>
  );
}

export default App;
