import { Theme } from './Theme';

export const defaultTheme: Theme = {
    table: {
        table: 'relative overflow-x-auto shadow-md sm:rounded-lg',
        head: 'w-full text-sm text-gray-500 dark:text-gray-400',
        headRow: '',
        headCell: 'px-6 py-3',
        body: '',
        bodyRow: 'bg-white border-b dark:bg-gray-800 dark:border-gray-700',
        stripedRow:
            'border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
        hoveredRow: 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600',
        bodyCell: 'px-6 py-4',
    },
};
