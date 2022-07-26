import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
  const style = {
    columnGap: props.columnGap ? `${props.columnGap}px` : '0',
    rowGap: props.rowGap ? `${props.rowGap}px` : '0',
  };

  const col = props.col ? `grid-col-${props.col}` : '';
  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : '';
  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : '';

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  columnGap: PropTypes.number,
  rowGap: PropTypes.number,
};

export default Grid;
