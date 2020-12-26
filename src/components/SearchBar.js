import React from "react";

const SearchBar = (props) => {
  return (<div>
    <div className="container">
      <div className="row">
        <section className="cpl s6 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
       </div>
  );
};
export default SearchBar;
