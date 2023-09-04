import PropTypes from "prop-types" // Import PropTypes
import {Pagination} from '@mui/material'

function PaginationComponent({postsPerPage, page, handlePagination}) {
  return (
    <Pagination
      className="paginate"
      count={Math.ceil(39 / postsPerPage)}
      page={page}
      onChange={handlePagination}
    />
  )
}

// Add PropTypes validation for the props
PaginationComponent.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  page:PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
}

export default PaginationComponent
