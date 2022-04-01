import injuryMap from '../data/injuryMap';

interface IntelexProps {
  count: number;
  body_Part_Affected: string;
  month_Name: string;
  year: number;
}

interface TabelTimeData {
  [key: string]: { count: number };
}

export interface TableData {
  [key: string]: TabelTimeData;
}

function getMonthNumber(month: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return months.indexOf(month) + 1;
}

// DANGER! this code sucks and shouldn't make it through to production
// there will be a better way of reformatting this code on the fly other than
// this object mapping hellscape that depends on ordered keys

export default function mapIntelexOutput(intelexData: IntelexProps[]) {
  let tableData: TableData = {};

  //   map for parts first to get unique values

  let uniqueParts: string[] = Array.from(
    new Set(
      intelexData.map(item => {
        // while we're mapping over this, start stashing data in tableData by month

        const tableDataTarget = tableData[item.body_Part_Affected];

        if (typeof tableDataTarget !== 'object') {
          tableData[item.body_Part_Affected] = {};
        }

        tableData[item.body_Part_Affected][
          `${item.year}/${getMonthNumber(item.month_Name)}`
        ] = {
          count: item.count
        };

        return item.body_Part_Affected;
      })
    )
  );

  //   map to parts with injuryMap from config

  let parts: { x: number; y: number; text: string }[] = [];

  uniqueParts
    .map(text => {
      const mapped = injuryMap[text as keyof typeof injuryMap];
      if (!mapped) {
        return false;
      }

      return parts.push({
        ...mapped,
        text
      });
    });

  return {
    parts,
    uniqueParts,
    tableData
  };
}
