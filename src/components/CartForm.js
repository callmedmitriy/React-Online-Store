import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleChangeCart, sendCartRequest } from '../actions/actionCreators';

export default function CartForm() {
  const [canSend, setCanSend] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const { phone, address } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (agreement && phone && address) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [agreement, phone, address]);

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    dispatch(handleChangeCart(id, value));
  };

  const sendCart = (evt) => {
    evt.preventDefault();
    dispatch(sendCartRequest());
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={handleChange} value={phone || ''} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input className="form-control" id="address" placeholder="Адрес доставки" onChange={handleChange} value={address || ''} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agreement" checked={agreement} onChange={() => setAgreement(!agreement)} />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" className="btn btn-outline-secondary" disabled={!canSend} onClick={sendCart}>Оформить</button>
        </form>
      </div>
    </section>
  );
}
