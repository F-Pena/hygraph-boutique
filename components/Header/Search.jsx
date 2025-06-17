import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = ({ placeholder = "Search" }) => {
    return (
        <div className="relative">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            <input type="text" placeholder="Search" className="w-full h-full pl-10 pr-4 py-2 rounded-md bg-gray-900 bg-opacity-80 backdrop-blur-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
        </div>
    )
}

export default Search;