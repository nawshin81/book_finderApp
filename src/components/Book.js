import React from "react";

const Book = (props) => {
  const ImageURL = props.data.volumeInfo.imageLinks;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {ImageURL == null ? (
              <img
                src="https://picsum.photos/200/300"
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img src={ImageURL.thumbnail}  />
            )}
            <span className="card-title">{props.data.volumeInfo.title}</span>
          </div>
          <div className="card-content">{props.data.volumeInfo.authors}</div>
          <div className="card-action">See Details</div>
        </div>
      </div>
    </div>
  );
};
export default Book;
