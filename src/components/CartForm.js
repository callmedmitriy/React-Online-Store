import React from 'react'

export default function CartForm() {
  return (
    <section class="order">
      <h2 class="text-center">Оформить заказ</h2>
      <div class="card" style="max-width: 30rem; margin: 0 auto;">
        <form class="card-body">
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input class="form-control" id="phone" placeholder="Ваш телефон">
          </div>
          <div class="form-group">
            <label for="address">Адрес доставки</label>
            <input class="form-control" id="address" placeholder="Адрес доставки">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="agreement">
            <label class="form-check-label" for="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" class="btn btn-outline-secondary">Оформить</button>
        </form>
      </div>
    </section>
  )
}