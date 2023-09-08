import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {IoFilter} from 'react-icons/io5';

const Filter = () => {
  return (
    <DropdownButton id="filter" title={<IoFilter/>}>
      <label htmlFor='ascending'>
        <input type='radio' name="sort" id="ascending"/>Ascending
      </label>
      <label htmlFor='descending'>
        <input type='radio' name="sort" id="descending"/>Descending
      </label>
      <hr/>
    </DropdownButton>
  )
}

export default Filter