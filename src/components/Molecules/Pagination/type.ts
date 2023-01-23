import React from "react";

export interface paginationProps {
    total: number,
    current: number,
    pageSize: number,
    onChange: (page: number) => void
}