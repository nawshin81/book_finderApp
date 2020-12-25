import React, { useState } from 'react'
import {getBookDetails} from '../api/GBapi'
import {Link} from 'react-router-dom'

const BookDetailsScreen=(props)=>{
    console.log(props)
    const[currentBook,setCurrentBook]=useState({});
    return(
        <div>
            BookDetails
        </div>
    )
}
export default BookDetailsScreen;