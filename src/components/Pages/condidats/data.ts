interface DataT {
  items: { [key: string]: { id: string; name: string } };
  columns: { [key: string]: { title: string; items: string[] } };
}

const initialData: DataT = {
  items: {
    '01': { id: '01', name: 'bilal Dif' },
    '02': { id: '02', name: 'lakjdar ben' },
    '03': { id: '03', name: 'beladel sife' },
  },
  columns: {
    'col-01': {
      title: 'All',
      items: ['01', '03'],
    },
    'col-02': {
      title: 'first interview',
      items: [],
    },
    'col-03': {
      title: 'second interview',
      items: ['02'],
    },
  },
};
export default initialData;
