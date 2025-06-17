'use client'

const AddToBagButton = () => {
    return (
        <button
            type="submit"
            className="flex items-center justify-center w-full px-8 py-3 my-10 text-base font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
            onClick={() => {
                alert('Add to Bag functionality coming soon!')
            }}
        >
            Add to bag
        </button>
    )
}

export default AddToBagButton;