import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {Container, CircularProgress, TextField, Grid,Card, CardContent, Typography} from '@mui/material'
import {PopupCard} from './Cards'
import FilterComponent from './FilterComponent'
import PaginationComponent from './PaginationComponent'

function Search() {
  const [loading, setLoading] = useState(false)
  const [vehicles, setVehicles] = useState([])
  const [filteredResult, setFilteredResult] = useState([])
  const [filterByClass, setFilterByClass] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1)
  const postsPerPage = 5
  useEffect(() => {
    fetchVehicles(page)
  }, [page])

  const fetchVehicles = async (page) => {
    setLoading(true)
    try {
      const response = await axios.get(`https://swapi.dev/api/vehicles?page=${page}`)
      setVehicles(response.data.results)
      setFilteredResult(response.data.results)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching vehicles:", error)
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const searchQuery = e.target.value.toLowerCase()
    setSearchValue(searchQuery)

    if (!searchQuery) {
      setFilteredResult(vehicles)
    } else {
      const searchArr = vehicles.filter((item) => item.name.toLowerCase().includes(searchQuery))
      setFilteredResult(searchArr)
    }
  }

  const handleFilter = (e) => {
    const filterQuery = e.target.value.toLowerCase()
    setFilterByClass(filterQuery)

    if (!filterQuery) {
      setFilteredResult(vehicles)
    } else {
      const searchArr = vehicles.filter((item) => item.vehicle_class.toLowerCase().includes(filterQuery))
      setFilteredResult(searchArr)
    }
  }

  const handlePagination = (event, newPage) => {
    fetchVehicles(page)
    setPage(newPage)
  }

  const totalPages = Math.ceil(vehicles.length / postsPerPage)

  return (
    <Container>
      <Typography variant="h4" align="center" className='header' sx={{ m: '2rem' }}>
        Star Wars Vehicles Catalogs
      </Typography>
      <div className='input-header'>  
      <TextField
        sx={{ m: '2rem' }}
        label="Search Vehicle"
        variant="outlined"
        value={searchValue}
        fullWidth
        onChange={(e) => handleChange(e)}
        style={{ marginBottom: "16px" }}
      />
      <div style={{ paddingTop: '5px', marginBottom:'10px' }}>
      <FilterComponent filterByClass={filterByClass} 
      handleFilter={handleFilter} />
      </div>
      </div>
      {loading ? (
        <div className='input-header'><CircularProgress color="success" /></div>
      ) : (
        <>
          <Grid container spacing={8} paddingTop="20px" row={{ xs: 3, sm: 3, md: 3 }}>
          {filteredResult?.map((vehicle) => (
            <Grid item xs={4} sm={4} md={4} lg={4} key={vehicle.name}>
              <Card className="card-design" style={{backgroundColor: "beige"}}>
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
        <PaginationComponent totalPages={totalPages}
        page={page} 
        handlePagination={handlePagination} />
        </>
      )}
    </Container>
  )
}

export default Search
