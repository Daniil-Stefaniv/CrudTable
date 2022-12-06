import React from 'react';
import TableCellProps from './TableCellTypes';

const TableCell = ({ isHeading, value, specialStyles }: TableCellProps) => {
	return isHeading ? (
		<th className=" text py-2 bg-slate-700 text-white border border-gray-900 rounded-md overflow-hidden text-base self-stretch sm:text-xs sm:font-semibold lg:text-sm lg:font-bold">
			{value}
		</th>
	) : (
		<td
			className={
				specialStyles
					? ` flex justify-center items-center border border-gray-900 rounded-md overflow-hidden self-stretch sm:text-xs sm:font-normal lg:text-sm lg:font-semibold ${specialStyles}`
					: ' flex justify-center items-center text-slate-700 border border-gray-900 rounded-md overflow-hidden self-stretch sm:text-xs sm:font-normal lg:text-sm lg:font-semibold'
			}
		>
			{value}
		</td>
	);
};

export default TableCell;
