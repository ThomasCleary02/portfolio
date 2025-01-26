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
                ? "bg-primaryBlue text-white"
                : "bg-lightGray text-primaryBlue"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterPills;
  