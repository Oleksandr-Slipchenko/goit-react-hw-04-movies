import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MoviesPage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=dog`,
      );

      this.setState({ films: response.data.results });
      console.log(response.data.results);
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }

  render() {
    return (
      <>
        <h1>Movies Page</h1>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              {film.title}
              <Link to={`${this.props.match.url}/${film.id}`}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// import React, { Component } from 'react';
// import axios from 'axios';

// // import { Link } from 'react-router-dom';

// export default class MoviesPage extends Component {
//   state = {
//     films: [],
//     inputValue: '',
//   };

//   async componentDidMount() {
//     const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';

//     const response = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.handleInput}`,
//     );

//     this.setState({ films: response.data.results });
//     console.log(response.data.results);
//   }

//   handleInput = e => {
//     console.log(e.currentTarget.value);
//     this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.inputValue.trim() === '') {
//       // toast.error('Введите запрос.');
//       return;
//     }
//     // this.props.onSubmit(this.state.inputValue);
//     this.setState({ films: e });
//     this.setState({ inputValue: '' });
//   };

//   render() {
//     return (
//       <div className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search movie"
//             onChange={this.handleInput}
//             value={this.state.inputValue}
//           />
//         </form>
//       </div>
//     );
//   }
// }
