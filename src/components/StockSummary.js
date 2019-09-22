import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockSummary.css'

function StockSummary(props) {

  return (
    <div>
      <h3>Today&apos;s Price</h3>
      <div className={styles.flexContainer}>
        <div className={styles.stockPriceIconContainer}>
          <p><span className={styles.stockPriceIcon}>icon</span></p>
        </div>
        <div className={styles.stockPriceDescription}>
          <p>{props.stock.name}</p>
          <p>{props.stock.price}</p>
        </div>
      </div>
    </div>
  );
}

StockSummary.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string
  })
}

export default StockSummary;