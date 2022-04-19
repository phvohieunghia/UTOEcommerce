import Icons from 'assets/icons';
import React from 'react';
import './Pagination.scss';

const Pagination = ({ switchPage, page, currentPage }) => {
  let x = [];
  const render = () => {
    for (let i = 1; i <= page; i++) {
      if (i == currentPage) {
        x.push(
          <li className="active" key={i} onClick={switchPage(i)}>
            <button>{i}</button>
          </li>,
        );
      } else {
        x.push(
          <li key={i} onClick={switchPage(i)}>
            <button>{i}</button>
          </li>,
        );
      }
    }
    return x;
  };

  return (
    <div id="pagination">
      <ul className="pagination">
        <li>{currentPage !== 1 && <Icons.AngleLeft height={'16px'} />}</li>
        {render()}
        <li>{currentPage !== page && <Icons.AngleRight height={'16px'} />}</li>
      </ul>
    </div>
  );
};

export default Pagination;
