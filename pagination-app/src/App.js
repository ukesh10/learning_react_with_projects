import logo from './logo.svg';
import './App.css';
import db from './user.json'
import {useState} from 'react'
import ReactPaginate from 'react-paginate'

function App() {
  const [users, setUsers] = useState(db.slice())
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 3
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
  .map(user => {
    return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.group}</td>
    </tr>
    );
  });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Group</th>
    </tr>
  </thead>
  <tbody>
  {displayUsers}
  </tbody>
</table>
      <ReactPaginate
        previousLabel={'PREV'}
        nextLabel={'NEXT'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination-btns'}
        previousLinkClassName={'prev-btn'}
        nextClassName={'next-btn'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
}

export default App;
