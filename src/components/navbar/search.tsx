import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="w-full cursor-pointer rounded-full border py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-center">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="hidden flex-1 border-x px-6 text-center text-sm font-semibold sm:block">
          Any Week
        </div>
        <button className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <SearchIcon size={18} />
          </div>
        </button>
      </div>
    </div>
  );
}
