import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Order__item.css";
Order__item.propTypes = {
  order: PropTypes.object,
  onChosen: PropTypes.func,
  onRemove: PropTypes.func,
};
Order__item.propTypes = {
  order: null,
  onChosen: null,
  onRemove: null,
};

function Order__item(props) {
  // const [check, setCheck] = useState(false);
  const { order, onChosen, onRemove } = props;

  function handleCheck(e) {
    const a = order.id;
    onChosen(a, e.target.checked, order);
  }
  function handleRemove(e) {
    const a = order.id;
    onRemove(a, order);
  }
  return (
    <li className="list__item-product">
      <div className="product__delete">
        <button>X</button>
      </div>
      <div className="list__item-wrap">
        <div className="product__info">
          <input className="product__check" type="checkbox"></input>
          <div className="product__image">
            <img className="img" src={order.url}></img>
          </div>
          <div>{order.name}</div>
        </div>
        <span className="product__price">{order.price}$</span>
        <div className="product__num-wrap">
          <button className="add__button" onClick={handleRemove}>
            -
          </button>
          <span className="product__num">{order.count}</span>
          <button className="sub__button" onClick={handleCheck}>
            +
          </button>
        </div>
        <span className="product__total">{order.price * order.count}$</span>
      </div>
    </li>
  );
}

export default Order__item;
