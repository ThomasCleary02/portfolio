const FilterPills = ({ activeFilter, setActiveFilter }) => {
    const filters = ["All", "Professional", "Hobby"];
  
    return (
      <div className="flex justify-left space-x-4 py-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterPills;
  