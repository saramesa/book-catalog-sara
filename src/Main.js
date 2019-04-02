import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://saramesa-book-catalog.firebaseapp.com/api/catalog")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.catalog
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log('this.state ', this.state)
    console.log('items ', items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <img alt="Loading" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    } else {
      return (
		<div>
          {Object.keys(items).map(item => (
            <div key={item}>
            	<div></div>
            	<div>{items[item].title}</div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Main;