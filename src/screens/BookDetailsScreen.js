import React, { useEffect, useState } from 'react'
import {getBookDetails} from '../api/GBapi'
import {Link} from 'react-router-dom'

const BookDetailsScreen=(props)=>{
    //console.log(props)
    const[currentBook,setCurrentBook]=useState({});
    const[currentImage,setCurrentImage]=useState('')
    useEffect(()=>{
        getBookDetails(props.location.volumeId,setCurrentBook,setCurrentImage)
    },[]);
    //console.log(currentBook)
   
    //console.log(currentImage);
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {currentImage == "" ? (
              <img
                src="https://picsum.photos/200/300"
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img src={currentImage}  />
            )}
            <span className="card-title">{currentBook.title}</span>
          </div>
          <span className="card-title" style={{color:'black'}}>{currentBook.authors}</span>
            <p style={{fontSize:30,paddingLeft:10,paddingRight:10}}>{currentBook.description}</p>
          <div className="card-action">
            <Link to='/'>Go to search page</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetailsScreen;