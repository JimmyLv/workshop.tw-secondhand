import * as React from 'react'
import {Component} from 'react'


import './ProductList.css'
import {Product} from '../../definitions'

export interface ProductListProps {
  items: Product[]
}

export class ProductList extends Component<ProductListProps> {
  render() {
    return (
      <div className="product-list">
        <ul>
          {
            this.props.items.map((item, i) => (
              <li key={i} className="App-product-list-item">
                <div className="left">
                  <img src='./home.png' height="60" width="60"></img>
                </div>
                <div className="right">
                  <text>{item.name}</text>
                  <br/>
                  <text>¥ {item.price}</text>
                  <br/>
                  <text>{item.details}</text>
                  <br/>
                  <text>{item.status}</text>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
