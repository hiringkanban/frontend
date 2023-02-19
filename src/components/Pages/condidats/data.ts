interface DataT {
  items: { [key: string]: { id: string; name: string } };
  columns: { [key: string]: { title: string; items: string[] } };
}

const initialData: DataT = {
  items: {
    '01': { id: '01', name: 'bilal Dif' },
    '02': { id: '02', name: 'lakjdar ben' },
    '03': { id: '03', name: 'beladel sife' },
    '04': { id: '04', name: 'bilal Dif' },
    '05': { id: '05', name: 'lakjdar ben' },
    '06': { id: '06', name: 'beladel sife' },
    '07': { id: '07', name: 'bilal Dif' },
    '08': { id: '08', name: 'lakjdar ben' },
    '09': { id: '09', name: 'beladel sife' },
  },
  columns: {
    'col-01': {
      title: 'Applied',
      items: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    },
    'col-02': {
      title: 'Interview',
      items: [],
    },
    'col-03': {
      title: 'HR interview',
      items: [],
    },
    'col-04': {
      title: 'Hired',
      items: [],
    },
    'col-05': {
      title: 'Disqualified',
      items: [],
    },
  },
};
export default initialData;
