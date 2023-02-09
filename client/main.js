import * as React from 'react';
import {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

import { data } from './scrapers'

export default function Main() { 

  console.log(data)
  const rows = data

  const columns = [
    { field: 'col1', headerName: 'Name', width: 150 },
    { field: 'col2', headerName: 'GitHub URL', width: 600 },
    { field: 'col3', headerName: 'Source URL', width: 600 },
  ];
  
  return (
    <div>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </div>
    
  );
}