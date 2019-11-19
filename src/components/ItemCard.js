import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { itemRequest } from '../actions/actionCreators'

import Preloader from './Preloader';

export default function ItemCard({match}) {

  const id = Number(match.params.id)
  const {item, loading, error } = useSelector(state => state.item)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemRequest(id))
  }, [dispatch])


  if (loading) return <Preloader />;
  if (error) return <p>Something went wrong</p>;

  const { title, images, sku, manufacturer, color, material, reason, season } = item
  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
          <div className="col-5">
              <img src={ images ? images[0] : '' }
                  className="img-fluid" alt={title}/>
          </div>
          <div className="col-7">
              <table className="table table-bordered">
                  <tbody>
                      <tr>
                          <td>Артикул</td>
                          <td>{sku}</td>
                      </tr>
                      <tr>
                          <td>Производитель</td>
                          <td>{manufacturer}</td>
                      </tr>
                      <tr>
                          <td>Цвет</td>
                          <td>{color}</td>
                      </tr>
                      <tr>
                          <td>Материалы</td>
                          <td>{material}</td>
                      </tr>
                      <tr>
                          <td>Сезон</td>
                          <td>{season}</td>
                      </tr>
                      <tr>
                          <td>Повод</td>
                          <td>{reason}</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center">
                  <p>Размеры в наличии: <span className="catalog-item-size selected">18 US</span> <span className="catalog-item-size">20 US</span></p>
                  <p>Количество: <span className="btn-group btn-group-sm pl-2">
                          <button className="btn btn-secondary">-</button>
                          <span className="btn btn-outline-primary">1</span>
                          <button className="btn btn-secondary">+</button>
                      </span>
                  </p>
              </div>
              <button className="btn btn-danger btn-block btn-lg">В корзину</button>
          </div>
      </div>
    </section>
  );
}
