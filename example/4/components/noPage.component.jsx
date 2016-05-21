import React from 'react';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}

export default PageNotFound;