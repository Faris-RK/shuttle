import orderDetail from "../../assets/orderdetail.png";
export default function content3() {
  return(
    <div className="order-detai-container">
          <img className="orderdetail-image" src={orderDetail} alt="" />
          <button className="book-now">Book now</button>
        </div>
  )
}