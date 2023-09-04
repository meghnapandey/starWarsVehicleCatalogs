import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterComponent({ filterByClass, handleFilter }) {
  const filterOptions = [
    { value: '', label: 'All Classes' },
    { value: 'wheeled', label: 'Wheeled' },
    { value: 'repulsorcraft', label: 'Repulsorcraft' },
    { value: 'speeder', label: 'Speeder' },
    { value: 'starship', label: 'Starship' },
    { value: 'walker', label: 'Walker' },
    { value: 'sail barge', label: 'Sail Barge' },
  ];

  return (
    <FormControl variant="outlined" style={{ minWidth: '150px', marginTop: '17px' }}>
      <InputLabel id="class-filter-label">Filter by Class</InputLabel>
      <Select
        labelId="class-filter-label"
        id="class-filter"
        value={filterByClass}
        onChange={handleFilter}
        label="Filter by Class"
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterComponent.propTypes = {
  filterByClass: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterComponent;
