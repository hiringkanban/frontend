interface dataT {
    items: { [key: string] : { id: string, name: string} };
    columns: { [key: string]: {title: string, items: string[]}}
}

export const initialData: dataT = {
    items: {
        '01': { id: '1', name: 'bilal Dif' },
        '02': { id: '2', name: 'lakjdar ben' },
        '03': { id: '3', name: 'beladel sife' }
    },
    columns: {
        'col-01': {
            title: 'All',
            items: ['01', '02', '03']
        },
        'col-02': {
            title: 'first interview',
            items: []
        }
    }
}