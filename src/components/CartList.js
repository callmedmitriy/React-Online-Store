import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { removeFromCart } from '../actions/actionCreators';


export default function CartList() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let total = 0;
  cart.forEach((o) => {
    total += o.count * o.price;
  });

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.map((position, index) => (
            <tr key={position.name + position.size}>
              <th>{++index}</th>
              <td><NavLink to={`/catalog/${position.id}`}>{position.name}</NavLink></td>
              <td>{position.size}</td>
              <td>{position.count}</td>
              <td>{position.price} руб.</td>
              <td>{position.count * position.price} руб.</td>
              <td><button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(removeFromCart(position.name, position.size))}>Удалить</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>{total} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
