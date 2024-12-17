
import { Button } from '@mui/material'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBox = () => {
  return (
      <div className='headerSearch'>
        <input type='text' placeholder="Tìm kiếm sản phẩm ..." />
        <Button >
          <IoSearch />
        </Button>
      </div>

  )
}

export default SearchBox