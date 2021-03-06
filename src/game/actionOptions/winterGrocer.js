import { removePeatFromCoord, flipEmptyMoors } from './peatCutter'
import { possiblePeatLocations } from '../constants'

export default ({ G, ctx, args }) => {
  const [toDrain, item] = args
  return {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        tokens: [...G.players[ctx.currentPlayer].tokens, item],
        land: possiblePeatLocations.reduce(
          flipEmptyMoors,
          removePeatFromCoord(G.players[ctx.currentPlayer].land, toDrain)
        ),
      },
    },
    action: null,
  }
}
