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
    spinner: 'inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
    alert: {
        empty: 'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 font-medium',
        error: 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium',
        loading: 'p-4 text-sm text-gray-700 dark:text-gray-300'
    }
};
