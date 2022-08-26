import { Component } from 'react';
import Car from './Car'

class App extends Component {
  state = {
    cars: [
      {
        name: 'Ford',
        year: 2015
      },
      {
        name: 'Ferrari',
        year: 1999
      },
      {
        name: 'Skyline',
        year: 2002
      },
    ],
    title: 'React Components',
    showCars: false
  }

  ToggleCarsHandler = (e) => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  onChangeTitleInputHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onChangeTitleButtonHandler = (name) => {
    this.setState({
      title: name
    })
  }
  onChangeTitleCarsHandler = (value, idx) => {
    let cars = [...this.state.cars]
    cars[idx].name = value

    this.setState({
      cars
    })
  }
  render() {
    const AppStyle = {
      textAlign: 'center',
    }
    const buttonCSS = {
      padding: '10px 30px',
      background: 'transparent',
      color: '#fff',
      border: '1px solid #fff',
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontSize: 20,
      letterSpacing: 2,
    }
    const inputCSS = {
      padding: '7px 10px',
    }
    let div = null
    if (this.state.showCars) {
      div = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            idx={index}
            name={car.name}
            year={car.year}
            onClick={
              this.onChangeTitleButtonHandler.bind(this, car.name)
            }
            onChange={
              this.onChangeTitleCarsHandler
            }
          />
        )
      })
    }

    return (
      <div div className="App" style={AppStyle} >
        <h1 style={{ fontSize: 60, margin: 10 }}>{this.state.title}</h1>
        <input style={inputCSS} type="text" onChange={this.onChangeTitleInputHandler} /><br /><br />
        <button style={buttonCSS} onClick={this.ToggleCarsHandler}>Click</button>
        <br />
        <br />
        {
          div
        }
      </div >
    );
  }
}

export default App;