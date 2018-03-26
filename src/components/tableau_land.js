import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TableauItem from './tableau_item'
import './tableau_land.css'

const TableauLand = ({
  children,
  flooded,
  style,
  focusedItemIndex,
  handleSetFocus,
}) => (
  <div
    style={style}
    className={classNames('TableauLand', children.type, {
      flooded: flooded,
    })}
  >
    <div>
      <b>{children.type !== 'empty' && children.type}</b>
      <br />
      {children.contents.map((item, i) => {
        return (
          <TableauItem
            key={i}
            i={i}
            display={focusedItemIndex !== i}
            handleSetFocus={handleSetFocus && handleSetFocus(i)}
          >
            {item}
          </TableauItem>
        )
      })}
    </div>
  </div>
)

TableauLand.propTypes = {
  style: PropTypes.object,
  focusedItemIndex: PropTypes.any,

  focus: PropTypes.object,
  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
}

export default TableauLand
