import React, { ReactNode } from 'react';
import RandomKey from '../../RandomKey/RandomKey';
import TableRow from '../TableRow/TableRow';
import TableProps, { unsortedDataType } from './TableTypes';

const Table = ({ headersList, bodyInfoList }: TableProps) => {
	const rowGenerator = (
		rowData: Array<string | number>,
		isHeading = false
	) => {
		return (
			<TableRow
				key={RandomKey()}
				dataForRow={rowData}
				isHeadingRow={isHeading}
			/>
		);
	};

	return (
		<table className=" w-full grid grid-cols-[.2fr_repeat(2,_1fr)_1.3fr_repeat(4,_1fr)] gap-1">
			<thead className="contents">
				{rowGenerator(headersList, true)}
			</thead>

			<tbody className="contents">
				{bodyInfoList.map(infoBlock => {
					const unsortedData: Array<string | number> =
						Object.values(infoBlock);

					const rowData = unsortedData.map(
						(val: unsortedDataType, idx: number) => {
							if (
								typeof val === 'string' ||
								typeof val === 'number'
							)
								return val;

							const parsedData = Object.values(val)
								.map((el: unsortedDataType, index: number) => {
									if (idx === 4) {
										if (index <= 2) return el;
									} else if (idx === 7) {
										if (index < 1) return el;
									}
								})
								.join(', ');
							return parsedData;
						}
					);

					return rowGenerator([...rowData], false);
				})}
			</tbody>
		</table>
	);
};

export default Table;
