import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleChangeCart, sendCartRequest } from '../actions/actionCreators'

export default function CartForm() {
  const [canSend,setCanSend] = useState(false);
  const [agreement,setAgreement] = useState(false);
  const { phone, address } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    if ( agreement && phone && address ) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  },[agreement, phone, address])

  const handleChange = evt => {
    const {id, value} = evt.target;
    dispatch(handleChangeCart(id, value));
  }

  return (
    <section class="order">
      <h2 class="text-center">Оформить заказ</h2>
      <div class="card">
        <form class="card-body">
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input class="form-control" id="phone" placeholder="Ваш телефон" onChange={handleChange} value={phone}/>
          </div>
          <div class="form-group">
            <label for="address">Адрес доставки</label>
            <input class="form-control" id="address" placeholder="Адрес доставки" onChange={handleChange} value={address}/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="agreement" checked={agreement} onChange={() => setAgreement(!agreement)}/>
            <label class="form-check-label" for="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" class="btn btn-outline-secondary" disabled={!canSend} onClick={() => dispatch(sendCartRequest())}>Оформить</button>
        </form>
      </div>
    </section>
  )
}