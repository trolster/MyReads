import React, { Component } from 'react';

class Book extends Component {
  render() {
    const {book} = this.props;
    const {shelf, title, authors} = book;
    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.thumbnail}")`
    };
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={bookCoverStyle}></div>
            <div className="book-shelf-changer">
              <select
                value={shelf}
                onChange={
                  (e) => this.props.handleBookListChange(book, e.target.value)
                }>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors[0]}</div>
        </div>
      </li>
    )
  }
}

export default Book;