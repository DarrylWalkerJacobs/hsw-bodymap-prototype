import { useState } from 'react';

import Body from '../../components/Body/Body';
import Table from '../../components/Table/Table';
import './App.scss';

function App() {
  const [activeTable, setActiveTable] = useState<string | null>(null);

  return (
    <div className="app bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col text-center py-3">
            <Body setActiveTable={setActiveTable} />
          </div>
          <div className="col">
            {activeTable && <Table location={activeTable} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
