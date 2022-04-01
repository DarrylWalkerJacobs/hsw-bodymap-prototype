import { TableData } from '../../utilities/mapIntelexOutput';

interface TableProps {
  activePart: string;
  tableData: TableData;
}

function Table({ tableData, activePart }: TableProps) {
  const useData = tableData[activePart as keyof TableData];

  const ordered = useData
    ? Object.keys(useData)
        .sort()
        .reduce((obj: { [key: string]: any }, key) => {
          obj[key] = useData[key];
          return obj;
        }, {})
    : {};

  return (
    <div className="table-wrapper">
      <h3 className="text-uppercase">{activePart}</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {ordered &&
            Object.keys(ordered).map((key: string) => {
              const current = ordered[key];

              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{current.count}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
