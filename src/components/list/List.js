import React from 'react';
import Loading from '../loading/Loading';
import Table from './Table.js';
import Pagination from '../pagination/Pagination'


class List extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loading: false,
      persons: [],
      page: 1,
      totalPages: 10,
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }

  fetcher() {
    this.setState({ loading: true });

    const { page } = this.state;
    
    fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=68c39d577bdccfdc`)
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })

    .then((data) => {
      this.setState({ 
        persons: data["results"], 
        loading: false 
      });
    });
  }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;

    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      this.fetcher();
    })
  }

  render() {

    const { loading, persons, page, totalPages } = this.state;

    if (loading) {
      return <div className="Loading-container"><Loading /></div>
    }
    return (
      <div>
        <Table 
        persons={persons}
        page={page}
         />
        <Pagination 
        page={page}
        totalPages={totalPages}
        handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;