import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {IoFilter} from 'react-icons/io5';
import { GlobalState } from '../ContextAPI';

const Filter = () => {

  const{setFilterOpt} = GlobalState();

  return (
    <DropdownButton id="filter" title={<IoFilter/>}>
      <label htmlFor='ascending'>
        <input type='radio' name="sort" id="ascending" onChange={()=>setFilterOpt({sort:'asc'})}/>Ascending
      </label>
      <label htmlFor='descending'>
        <input type='radio' name="sort" id="descending" onChange={()=>setFilterOpt({sort:'desc'})}/>Descending
      </label>
      <hr/>
    </DropdownButton>
  )
}

export default Filter