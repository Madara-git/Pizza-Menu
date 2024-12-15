function Orders({ close }) {
  return (
    <div className="order">
      <p>We're Opened Until {close}:00 Come vist us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Orders;
