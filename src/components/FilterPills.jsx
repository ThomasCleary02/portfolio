import { motion } from 'framer-motion'
import { effects } from '../styles/animationVariants.js'

const FilterPills = ({ activeFilter, setActiveFilter }) => {
    const filters = ["All", "Professional", "Hobby"];
  
    return (
      <div className="flex justify-left space-x-4 py-4">
        {filters.map((filter) => (
          <motion.button
            variants={effects}
            whileHover="iconHover"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter
                ? "bg-primaryBlue text-white shadow-lg"
                : "bg-lightGray text-primaryBlue"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    );
  };
  
  export default FilterPills;
  