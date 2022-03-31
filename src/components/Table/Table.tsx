interface TableProps {
  location: string;
}

function Table({ location }: TableProps) {
  return (
    <div className="table-wrapper">
      <h3 className="text-uppercase">{location}</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Year To Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Math.round(Math.random() * 100)}</td>
            <td>{Math.round(Math.random() * 100)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
