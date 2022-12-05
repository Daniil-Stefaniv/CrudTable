import bodyRowData from '../../react-app-env';

export default interface TableProps {
	headersList: Array<string | number>;
	bodyInfoList: Array<bodyRowData>;
}

export type unsortedDataType = string | number | { [key: string]: string };
