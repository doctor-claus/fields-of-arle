import React from 'react';
import PropTypes from 'prop-types';
import WorkerSpot from './worker_spot';
import ToolTrack from './tool_track';
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    workerSpaces: PropTypes.any.isRequired,
    toolSpaces: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    game: PropTypes.any.isRequired,
    currentPlayer: PropTypes.any.isRequired,
    phase: PropTypes.string.isRequired,
  }

  hasPlacedWorker() {
    // need to || [], because the November/December/May/June spots are undefined
    let workersPrepSpot = this.props.workerSpaces[this.props.phase] || []
    let nextWorkerToPlace = workersPrepSpot[0]
    let currentPlayer = parseInt(this.props.currentPlayer, 10);
    return nextWorkerToPlace !== currentPlayer
  }

  isWinter() {
    return ['december','january','february','march','april','may'].includes(this.props.phase)
  }

  isSummer() {
    return ['june','july','august','september','october','november'].includes(this.props.phase)
  }

  canPlaceInSummer() {
    return this.isSummer() && !this.hasPlacedWorker()
  }

  canPlaceInWinter() {
    return this.isWinter() && !this.hasPlacedWorker()
  }

  summerAction(job) {
    this.props.moves.summerAction(job);
  }

  winterAction(job) {
    this.props.moves.winterAction(job);
  }

  render() {
    return (
      <table className="ActionsBoard">
        <thead>
          <tr>
            <th>Summer</th>
            <th colSpan="3">Tools</th>
            <th>Winter</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="fisherman" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="2">
              <div>Fish Traps</div>
              <ToolTrack values={[2,3,4,5,6]} track={this.props.toolSpaces.fishTraps} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="peatBoatman" label="Peat Boatman" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="grocer" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Fleshing Beams</div>
              <ToolTrack values={[3,5,6]} track={this.props.toolSpaces.fleshingBeams} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="tanner" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="woolWeaver" label="Wool Weaver" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="3">
              <div>Weaving Looms</div>
              <ToolTrack values={[2,3,4,5]} track={this.props.toolSpaces.weavingLooms} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="linenWeaver" label="Linen Weaver" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="colonist" worker={this.props.workerSpaces} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Slaughtering Tables</div>
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.slaughteringTables} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="butcher" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="peatCutter" label="Peat Cutter" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="2">
              <div>Spades</div>
              <ToolTrack values={[3,5,7]} track={this.props.toolSpaces.spades} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="cattleTrader" label="Cattle Trader" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="dikeBuilder" label="Dike Builder" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="2" rowSpan="2">
              <div>Shovel Pairs</div>
              <ToolTrack values={[1,2,2,3]} secondaryValues={[3,4,5,6]} track={this.props.toolSpaces.shovelPairs} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="grocer" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="clayWorker" label="Clay Worker" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td>
              <div>Builders' Merchant</div>
              <WorkerSpot disabled={!this.canPlaceInSummer()} job="buildersMerchant" label="Builders' Merchant" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr> */}
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} onClick={(job) => this.summerAction(job)} job="farmer" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Pottery Wheels</div>
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.potteryWheels} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()} onClick={(job) => this.winterAction(job)}  job="potter" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} onClick={(job) => this.summerAction(job)} job="forester" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Ovens</div>
              <ToolTrack values={[1,2,3,4]} track={this.props.toolSpaces.ovens} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()} onClick={(job) => this.winterAction(job)}  job="baker" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()} onClick={(job) => this.summerAction(job)} job="woodcutter" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="2">
              <div>Axes</div>
              <ToolTrack values={[3,4,5,6]} track={this.props.toolSpaces.axes} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="woodTrader" label="Wood Trader" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()}  onClick={(job) => this.summerAction(job)} job="summerMaster" label="Master" workerSpaces={this.props.workerSpaces} />
            </td>
            <td colSpan="3">
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.workbenches} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="winterMaster" label="Master" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <WorkerSpot disabled={!this.canPlaceInSummer()}  onClick={(job) => this.summerAction(job)} job="summerCarpenter" label="Carpenter" workerSpaces={this.props.workerSpaces} />
            </td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()}  onClick={(job) => this.summerAction(job)} job="builder" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="wainwright" workerSpaces={this.props.workerSpaces} />
            </td>
            <td rowSpan="2">
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="winterCarpenter" label="Carpenter" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot disabled={!this.canPlaceInSummer()}  onClick={(job) => this.summerAction(job)} job="warden" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td>
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="dikeWarden" label="Dike Warden" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <WorkerSpot disabled={!this.canPlaceInSummer()}  onClick={(job) => this.summerAction(job)} job="summerLaborer" label="Laborer" workerSpaces={this.props.workerSpaces} />
            </td>
            <td></td>
            <td colSpan="2">
              <WorkerSpot disabled={!this.canPlaceInWinter()}  onClick={(job) => this.winterAction(job)} job="winterLaborer" label="Laborer" workerSpaces={this.props.workerSpaces} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}