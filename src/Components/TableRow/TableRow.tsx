import React, { ReactNode } from 'react';
import RandomKey from '../../RandomKey/RandomKey';
import TableCell from '../UI/TableCell/TableCell';
import TableRowProps from './TableRowTypes';

const TableRow = ({ dataForRow, isHeadingRow }: TableRowProps) => {
	const cellGenerator = (
		isHeadingParam: boolean,
		cellData: string | number,
		specialClasses?: string
	): ReactNode => (
		<TableCell
			key={RandomKey()}
			isHeading={isHeadingParam}
			value={cellData}
			specialStyles={specialClasses}
		/>
	);

	return (
		<tr className="contents">
			{dataForRow.map(
				(dataEl: string | number, idx: number): ReactNode => {
					if (idx === 0 && !isHeadingRow) {
						return cellGenerator(
							false,
							dataEl,
							'bg-slate-700 text-white'
						);
					}

					return isHeadingRow
						? cellGenerator(true, dataEl)
						: cellGenerator(false, dataEl);
				}
			)}
		</tr>
	);
};

export default TableRow;
