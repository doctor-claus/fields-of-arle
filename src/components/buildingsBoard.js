import React from 'react'
import PropTypes from 'prop-types'
import Building from './building'

import './buildingsBoard.css'

const BuildingsBoard = ({ buildings, moves, shouldShowBuy, G, ctx }) => (
  <div className="BuildingsBoard">
    <div className="smallHouseHeading Heading">
      Small Houses
      {/* <div className="toolTip toolTipLeft">1 building material, 1 grain</div> */}
    </div>
    <div className="minorCraftBuildingHeading Heading">
      Minor Craft Buildings
      {/* <div className="toolTip toolTipLeft">1 timber, 1 brick</div> */}
    </div>
    <div className="majorCraftBuildingHeading Heading">
      Major Craft Buildings
    </div>
    <div className="innTileHeading Heading">
      Inn Tiles
      {/* <div className="toolTip toolTipLeft">
          2 different building materials, 9 food
        </div> */}
    </div>
    <div className="largeBuildingHeading Heading">
      Large Buildings
      {/* <div className="toolTip toolTipRight">3 timber, 3 bricks, 15 food</div> */}
    </div>
    {buildings.map(b => (
      <Building
        building={b}
        shouldShowTooltip
        shouldShowBuy={shouldShowBuy}
        moves={moves}
        G={G}
        ctx={ctx}
        key={b}
      />
    ))}
  </div>
)

BuildingsBoard.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  buildings: PropTypes.array.isRequired,
  shouldShowBuy: PropTypes.bool.isRequired,
  moves: PropTypes.any.isRequired,
}

export default BuildingsBoard