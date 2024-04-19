// BUTTONS HERE NEED ONCLICK

import Table from './Table'

export default function TableContainer() {
    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <button className = 'bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600'>Create Product</button>
                        <button className = 'bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 ml-2'>Edit Product</button>
                    </div>
                    <button className = 'bg-red-500 p-2 rounded-xl text-white hover:bg-red-600'>Remove Product</button>
                </div>
                <Table />
            </div>
        </>
    )
}