import { Pagination } from "@mui/material"
import PropTypes from "prop-types" // Import PropTypes

function PaginationComponent({ totalPages, page, handlePagination }) {
  return (
    <Pagination
            className='paginate'
            count={totalPages}
            page={page}
            onChange={handlePagination}
            style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
          />
  );
}

// Add PropTypes validation for the props
PaginationComponent.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
}

export default PaginationComponent
