import React from "react";

export interface columnsT {
    title: string | number,
    key: string | number,
    dataIndex: string,
    render?: (column: columnsT, item: dataSourceT) => React.ReactNode
}

export interface dataSourceT {
    [key: string]: any
}

export interface tableProps {
    columns: columnsT[],
    dataSource: dataSourceT[]
}

export interface rowCellprops {
    item: dataSourceT,
    column: columnsT
}
