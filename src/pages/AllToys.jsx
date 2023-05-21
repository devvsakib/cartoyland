import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import API from '../lib/API';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PrimaryButton from '../components/Common/PrimaryButton';

const columns = [
  { id: 'pictureUrl', label: 'Image', minWidth: 30 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'subcategory',
    label: 'Subcategory',
    minWidth: 20,
    align: 'left',
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 10,
    align: 'left',
    sortable: true, // Add sortable property
  },
  {
    id: 'availableQuantity',
    label: 'Quantity',
    minWidth: 10,
    align: 'left',
  },
  {
    id: 'sellerName',
    label: 'Seller',
    minWidth: 20,
    align: 'left',
  },
  {
    id: '',
    label: 'View',
    minWidth: 10,
    align: 'left',
  },
];

export default function StickyHeadTable() {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortOrder, setSortOrder] = useState('asc');
  const { totalToys } = useLoaderData();
  console.log(totalToys);
  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const getToys = async () => {
      try {
        const res = await API.getToysByLimit(page, itemsPerPage);
        // Sort the toys based on price if sortOrder is 'asc'
        const sortedToys = sortOrder === 'asc' ? res.sort((a, b) => a.price - b.price) : res;
        setToys(sortedToys);
      } catch (error) {
        console.log(error);
      }
    };
    getToys();
  }, [page, itemsPerPage, sortOrder]);

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const sortIcon = sortOrder === 'asc' ? '▲' : '▼';

  const handleSearch = () => {
    const filtered = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filtered);
    setPage(0);
  };

  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className='my-5'>
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-5 flex gap-3 justify-center items-center'>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
            placeholder='Search by toy name'
            className='w-1/2 px-3 py-1 sm:py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm'
          />
          <button className='btns' onClick={handleSort}>Sort {sortIcon}</button>
        </div>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label} {column.sortable && column.id === 'price' && sortIcon}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(searchTerm ? filteredToys : toys).map((row, index) => (
                  <TableRow
                  hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                         
                          key={column.id} align={column.align}>
                          {typeof value === 'string' && value.includes('https://') ? (
                            <img className='w-20' src={value} alt='' />
                          ) : column.id === '' ? (
                            <Link to={`/toy/${row._id}`}>
                              <PrimaryButton text={'View'} />
                            </Link>
                          ) : column.id === 'price' ? (
                            `$${value}`
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
                {searchTerm &&
                  (filteredToys.length === 0 || filteredToys.length === undefined) && (
                    <TableRow>
                      <TableCell colSpan={columns.length} align='center'>
                        No toys found.
                      </TableCell>
                    </TableRow>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex my-5 justify-center'>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`p-1 px-3 mx-2 ${page === number + 1
                  ? 'bg-accent text-white shadow-xl hover:shadow-lg hover:bg-accent px-5 py-2 rounded text-xl font-semibold text-accent gap-3'
                  : 'btns'
                  }`}
                onClick={() => handleChangePage(number + 1)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </Paper>
      </div>
    </div>
  );
}
