import PropTypes from 'prop-types'
import {FormControl,InputLabel,MenuItem, Select} from '@mui/material'

function FilterComponent({filterByClass, handleFilter}) {
  return (
    <FormControl variant="outlined" style={{ minWidth: '150px', marginTop:'17px'}}>
        <InputLabel id="class-filter-label">Filter by Class</InputLabel>
        <Select
          labelId="class-filter-label"
          id="class-filter"
          value={filterByClass}
          onChange={handleFilter}
          label="Filter by Class"
        >
          <MenuItem value="">
            <em>All Classes</em>
          </MenuItem>
          <MenuItem value="wheeled">Wheeled</MenuItem>
          <MenuItem value="repulsorcraft">Repulsorcraft</MenuItem>
          <MenuItem value="speeder">Speeder</MenuItem>
          <MenuItem value="walker">Walker</MenuItem>
          <MenuItem value="sail barge">Sail Barge</MenuItem>
        </Select>
      </FormControl>
  )
}

FilterComponent.propTypes = {
    filterByClass: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default FilterComponent
