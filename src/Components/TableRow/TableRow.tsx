import React, { ReactNode } from 'react';
import RandomKey from '../../RandomKey/RandomKey';
import TableCell from '../UI/TableCell/TableCell';
import TableRowProps from './TableRowTypes';

const TableRow = ({ dataForRow, isHeadingRow }: TableRowProps) => {
	const cellGenerator = (
		isHeadingParam: boolean,
		cellData: string | number
	): ReactNode => (
		<TableCell
			key={RandomKey()}
			isHeading={isHeadingParam}
			value={cellData}
		/>
	);

	return (
		<tr>
			{dataForRow.map((dataEl: string | number): ReactNode => {
				return isHeadingRow
					? cellGenerator(true, dataEl)
					: cellGenerator(false, dataEl);
			})}
		</tr>
	);
};

export default TableRow;
