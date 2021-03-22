import Header from './components/Header';
import Grid from './components/Grid';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title={'rick and morty'}
        subtitle={'hey, did you ever want to hold a terry fold?'}
      />
      <Grid />
    </div>
  );
}

export default App;
