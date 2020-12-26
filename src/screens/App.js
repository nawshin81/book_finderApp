import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import {getBooksByTerm} from '../api/GBapi'
import BookList from '../components/BookList'
import Pagination from '../components/Pagination';
import Picker from '../components/Picker'

const App=()=>{
  const[searchTerm,setSearchTerm]=useState('');
  const[books,setBooks]=useState([]);
  const[sort,setSort]=useState("");
  const[currentPage,setCurrentPage]=useState(1);
  const[totalPages,setTotalPages]=useState(0);
  const data = [
    { value: "newest", label: "Newest" },
    { value: "relevance", label: "Relevance" },
  ];

  const handleChange=(event)=>{
    //console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    await getBooksByTerm(searchTerm,setBooks,sort,currentPage,setTotalPages);
  }
  const nextPage=async(page_number)=>{
    let index = 20*(page_number-1)
    setCurrentPage(page_number);
    await getBooksByTerm(searchTerm,setBooks,sort,index,setTotalPages)
  }

  const pickerChange=(event)=>{
    setSort(event.value)
    //console.log(event)
  }

  return (<div>
    <Picker value={sort} data={data} handleChange={pickerChange}/>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
    <BookList books={books}/>
    {totalPages>1?(
      <Pagination
      nextPage={nextPage}
      currentPage={currentPage}
      totalPages={totalPages}/>
    ):("")}
  </div>
  );
}

export default App;
