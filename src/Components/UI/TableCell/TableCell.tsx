import React from 'react';
import TableCellProps from './TableCellTypes';

const TableCell = ({ isHeading, value }: TableCellProps) => {
	return isHeading ? <th className=" ">{value}</th> : <td>{value}</td>;
};

export default TableCell;
