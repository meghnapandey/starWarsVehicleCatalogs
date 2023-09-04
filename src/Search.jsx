import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {Container, CircularProgress, TextField, Grid,Card, CardContent, Typography} from '@mui/material'
import {PopupCard} from './Cards'
import FilterComponent from './FilterComponent'
import PaginationComponent from './PaginationComponent'

function Search() {
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [filterByClass, setFilterByClass] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
const postsPerPage = 10;

  useEffect(() => {
    fetchVehicles(page)
  }, [page])

const fetchVehicles = async (newPage) => {
  setLoading(true)
  try {
    const response = await axios.get(`https://swapi.dev/api/vehicles?page=${newPage}`)
    setVehicles(response.data.results)
    handleSearch(searchValue, filterByClass, response.data.results)
    setLoading(false)
  } catch (error) {
    console.error("Error fetching vehicles:", error)
    setLoading(false)
  }
}

const handleSearch = (query, filterBy, data) => {
  const lowerCaseQuery = query.toLowerCase()
  setFilterByClass(filterBy)
  setSearchValue(lowerCaseQuery)

  if (!lowerCaseQuery && !filterBy) {
    setFilteredResult(data)
  } else {
    const filteredVehicles = data.filter((item) =>
      (!lowerCaseQuery || item.name.toLowerCase().includes(lowerCaseQuery)) &&
      (!filterBy || item.vehicle_class.toLowerCase().includes(filterBy))
    )
    setFilteredResult(filteredVehicles)
  }
}

const handlePagination = (event, newPage) => {
  setFilterByClass("")
  setSearchValue("")
  setPage(newPage)
}

  return (
    <Container>
      <Typography variant="h4" align="center" className='header' sx={{ m: '2rem' }}>
        Star Wars Vehicles Catalogs
      </Typography>
      <div className='input-header'>  
      <TextField
        sx={{ m: '2rem' }}
        label="Search Vehicle Name"
        variant="outlined"
        value={searchValue}
        fullWidth
        onChange={(e) => handleSearch(e.target.value, filterByClass, vehicles)}
        style={{ marginBottom: "16px" }}
      />
      <div style={{ paddingTop: '5px', marginBottom:'10px' }}>
      <FilterComponent filterByClass={filterByClass} 
      handleFilter={(e) => handleSearch(searchValue, e.target.value.toLowerCase(), vehicles)} />
      </div>
      </div>
      {loading ? (
        <div className='input-header'><CircularProgress color="success" /></div>
      ) : (
        <>
          {filteredResult.length === 0 ? (
            <Typography variant="h6" align="center" className='no-data-message'>
              No match found.
            </Typography>
          ) : (
            <>
              <Grid container spacing={8} paddingTop="20px" row={{ xs: 3, sm: 3, md: 3 }}>
                {filteredResult?.map((vehicle) => (
                  <Grid item xs={4} sm={4} md={4} lg={4} key={vehicle.name}>
                    <Card className="card-design" style={{ backgroundColor: "beige" }}>
                      <CardContent>
                        <Typography variant="h5">{vehicle.name}</Typography>
                        <Typography className='label-styling'>Model: {vehicle.model}</Typography>
                        <Typography className='label-styling'>Vehicle Class: {vehicle.vehicle_class}</Typography>
                        <Typography className='label-styling'>Cost: {vehicle.cost_in_credits} credits</Typography>
                        </CardContent>
                          <PopupCard vehicle={vehicle} />
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <PaginationComponent page={page}
                postsPerPage={postsPerPage}
                handlePagination={handlePagination}
              />
          </>
          )}
        </>
      )}
    </Container>
  )
}

export default Search
