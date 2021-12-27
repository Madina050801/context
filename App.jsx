import './App.css';
import React from 'react'
import { data } from './Components/Informations.jsx'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      status: '',
      id: null,
      data: data,
      infoSearch: '',
      info: [],
      g: 'name',
    }

  }
  render() {
    const onDelete = (e) => {
      this.setState({
        data: this.state.data.filter((value) => value.id !== e)
      })
    }

    const onAdd = () => {
      const nd = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
      }

      this.setState({
        data: [
          ...this.state.data,
          nd
        ],
      })
    }

    const onchange = (e) => {
      this.setState({ name: e.target.value })
    }
    const onchange1 = (e) => {
      this.setState({ status: e.target.value })
    }

    const inputSearch = (e) => {
      this.setState({ infoSearch: e.target.value })

    }

    const mainInputChange = (e) => {
      e.target.value === 'name' && this.setState({
        g: 'name'
      })
      e.target.value === 'status' && this.setState({
        g: 'status'
      })
    }


    return (
      <div>
        <p>{this.state.info}</p>
        <table width={'100%'} border='1'>
          <tr>
            <input type="text" className='searchInput' placeholder='Search' onChange={inputSearch} />
          </tr>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>STATUS</td>
              <td>/\/\</td>
            </tr>
            <tr>
              <td>
                <select className='selectBlock' onChange={mainInputChange}>
                  <option value="name" className='miniOptions' data-attribute="b">NAME</option>
                  <option value="status" className='miniOptions' data-attribute="c">STATUS</option>
                </select>
              </td>
              <td>
                <input type="text" className='mainInput' placeholder='NAME' name='name' onChange={onchange} />
              </td>
              <td>
                <input type="text" className='mainInput' placeholder='STATUS' name='status' onChange={onchange1} />
              </td>
              <td><button className='addButton' onClick={onAdd}>ADD</button></td>
            </tr>
          </thead>

          {this.state.data.filter((value, id) => value[this.state.g].toLowerCase().includes(this.state.infoSearch)).map((value) => (
              
            <tbody>
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.status}</td>
                <td width={'5%'}><button onClick={() => onDelete(value.id)}>Delete</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
  }
}




export default App;