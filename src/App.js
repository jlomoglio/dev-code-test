import React, { Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Topbar from './components/Topbar'
import Gify from './components/Gify'

class App extends Component {
  state = {
    gif: []
  }

  URL = 'http://api.giphy.com/v1/gifs/search?q='
  APIKEY = '9XhqrSQLLCGpt3DhdwfL45VbfhT3kFLi'


  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.get(`${this.URL}${e.target[0].value}&api_key=${this.APIKEY}&limit=20`)
      .then(res => {
        this.setState({ gif: res.data.data })
      })
      .catch(err => console.log(err))
  }

  render() {

    const { gif } = this.state

    const Styles = styled.div`
      form {
        width: 100%;

        .input-group {
          width: 100%;
        }
      }
    `
 
    return (
      <Styles>
        <div className="App">
          <Topbar />
          <div className="row pl-5 pr-5 pt-5">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  aria-label="Giphy Search"
                  placeholder="Seach all the GIFs"
                />
                <button type="submit" className="btn btn-secondary">Search</button>
              </div>
            </form>
          </div>
          <div className="row">
            <h5 style={{
              textAlign: 'center',
              margin: 'auto',
              display: `${this.state.gif.length === 0  ? 'block' : 'none'}`
            }}>
              Type keyword above to begin your search
            </h5>
            {
              gif.map(img => (
                <Gify key={img.id} src={img.images.fixed_height.url} />
              ))
            }
          </div>
        </div>
      </Styles>
    )
  }
}

export default App
