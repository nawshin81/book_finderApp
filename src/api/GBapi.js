import axios from "axios";

const GBapi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (
  SearchTerm,
  setBooks,
  Sort,
  page_number,
  setTotalPages
) => {
  GBapi.get("/volumes", {
    params: {
      q: SearchTerm,
      orderBy: Sort,
      //key: "AIzaSyCQ5_XYD4kw5l3KVFTpfAWFqssOBsTRC4M",
      startIndex: page_number,
      maxResults: 20,
    },
  }).then((response) => {
    console.log(response);
    setBooks(response.data.items);
    let pages = Math.ceil(response.data.totalItems / 20);
    setTotalPages(pages);
  });
};
export { getBooksByTerm };
