import React, { Component, Fragment } from 'react'
import Styles from './style.module.css'
import data from './data.json';


function mergeClassName(...rest) {
  return rest.join(' ');
}


export default class Home extends Component {
  state = {
    imgModelURL: '',
    name: '',
    opacity: "0",
    price: 0,
    desc: ""
  }

  changeGlasses = (url, name, opacity, price, desc) => {
    this.setState({
      imgModelURL: url,
      name,
      opacity,
      price,
      desc
    });
  }

  renderData = () => {
    let x = data.map((glasses, index) => {
      return (
        <div className="col-2 my-4 d-flex justify-content-center">
          <img onClick={() => {
            this.changeGlasses(data[index].url, data[index].name, "1", data[index].price, data[index].desc)
          }} className='img-fluid w-75 glasses py-2' src={glasses.url} alt={glasses.name} />
        </div>
      );
    })
    return (
      <div className='row container mx-auto' >
        {x}
      </div>
    );
  }
  render() {
    return (
      <Fragment >
        <div className={mergeClassName(Styles.BackGround)}>
          <h1 className={mergeClassName(Styles.FontWhite)}>TRY GLASSES </h1>
          <div className="row">
            <div className="col-3 mx-auto text-center glassesImage ">
              <img src="./img/model.jpg" alt='modelImg' className="img-fluid img1" />
              <div className="changeGlasses">
                <img className='img-fluid img2' src={this.state.imgModelURL} alt={this.state.name} />
              </div>
              <div className="glassesDetail" style={{ opacity: this.state.opacity }}>
                <p className='detail1'>{this.state.name} - {this.state.price}$</p>
                <p className='detail2'>{this.state.desc}</p>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto text-center">
              {this.renderData()}
            </div>
          </div>
          {/* <div className="col d-flex justify-content-center glassesImage">
            <img className='imgModel' src="./glassesImage/model.jpg" alt="model" />
            <div className="glassesModel">
              <img className='glassesModelImage' src={this.state.imgModelURL} alt={this.state.name} />
            </div> */}


        </div>
        {/* </div> */}

      </Fragment >
    )
  }
}

