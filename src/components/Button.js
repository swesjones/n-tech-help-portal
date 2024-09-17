import React from 'react';

const Button = ({ item, icon, message, onClick }) => {
  return (
    <div className="item" onClick={() => onClick(item, message)}>
      <a href="javascript:void(0)" className="help-item" data-item={item}>
        <i className={icon}></i>
        <span>{item}</span>
      </a>
    </div>
  );
};

export default Button;