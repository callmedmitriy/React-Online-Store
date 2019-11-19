import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { itemRequest, addToCart } from '../actions/actionCreators'

import Preloader from './Preloader';
import Product from '../models/Product'

export default function ItemCard({match}) {

  const id = Number(match.params.id)
  const { item, loading, error } = useSelector(state => state.item)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemRequest(id))
  }, [dispatch])

  const [size, setSize] = useState(false);
  const [count, setCount] = useState(1);
  const { title, images, sku, manufacturer, color, material, reason, season, price } = item
  const sizeList = item.sizes ? item.sizes.filter(o => o.avalible === true) : []
  

  const addCount = () => {
    if (count >= 10) {
      setCount(10)
    } else {
      setCount(count+1)
    }
  }

  const removeCount = () => {
    if (count <= 1) {
      setCount(1)
    } else {
      setCount(count-1)
    }
  }

  const toCart = () => {
    const newItem = new Product(title, size, count, price);
    console.log('newitem',newItem);
    dispatch(addToCart(newItem));
    /* добавить редирект в корзину */
  }

  if (loading) return <Preloader />;
  if (error) return <p>Something went wrong</p>;

  
  return (
    <section className="catalog-item">
      <h2 className="text-center">{title ? title : 'Название отсутсвует'}</h2>
      <div className="row">
          <div className="col-5">
              <img src={ images ? images[0] : '' }
                  className="img-fluid" alt={title ? title : 'image'}/>
          </div>
          <div className="col-7">
              <table className="table table-bordered">
                  <tbody>
                      <tr>
                          <td>Артикул</td>
                          <td>{sku ? sku : 'Отсутсвует'}</td>
                      </tr>
                      <tr>
                          <td>Производитель</td>
                          <td>{manufacturer ? manufacturer : 'Отсутсвует'}</td>
                      </tr>
                      <tr>
                          <td>Цвет</td>
                          <td>{color ? color : 'Отсутсвует'}</td>
                      </tr>
                      <tr>
                          <td>Материалы</td>
                          <td>{material ? material : 'Отсутсвует'}</td>
                      </tr>
                      <tr>
                          <td>Сезон</td>
                          <td>{season ? season : 'Отсутсвует'}</td>
                      </tr>
                      <tr>
                          <td>Повод</td>
                          <td>{reason ? reason : 'Отсутсвует'}</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center">
                  <p>Размеры в наличии: {
                    sizeList.map(o => <span 
                      className={o.size === size ? "catalog-item-size selected" : "catalog-item-size"} 
                      key={o.size} 
                      onClick={() => setSize(o.size)}>{o.size}</span>)
                  }</p> 
                  <p>Количество: <span className="btn-group btn-group-sm pl-2">
                          <button className="btn btn-secondary" onClick={removeCount}>-</button>
                          <span className="btn btn-outline-primary">{count}</span>
                          <button className="btn btn-secondary" onClick={addCount}>+</button>
                      </span>
                  </p>
              </div>
              <button className="btn btn-danger btn-block btn-lg" disabled={!size} onClick={toCart}>В корзину</button>
          </div>
      </div>
    </section>
  );
}
