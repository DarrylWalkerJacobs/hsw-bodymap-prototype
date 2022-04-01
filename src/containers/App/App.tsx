import { useState } from 'react';

import Body from '../../components/Body/Body';
import Table from '../../components/Table/Table';
import intelexData from '../../data/intelex';
import mapIntelexOutput from '../../utilities/mapIntelexOutput';
import './App.scss';

function App() {
  const { parts, tableData } = mapIntelexOutput(intelexData);

  const defaultPart = parts.length > 0 ? parts[0].text : null;

  const [activePart, setActivePart] = useState<string | null>(defaultPart);

  return (
    <div className="app bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col text-center py-3">
            <Body
              activePart={activePart}
              parts={parts}
              setActivePart={setActivePart}
            />
          </div>
          <div className="col">
            {activePart && (
              <Table tableData={tableData} activePart={activePart} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
