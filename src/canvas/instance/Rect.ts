import AbstractUi, { AbstractUiData } from './AbstractUi'

export const defaultRectData = {
  cornerRadius: 0,
  lineWidth: 1
}

export interface RectData extends AbstractUiData {
  x?: number
  y?: number
  width?: number
  height?: number
  cornerRadius?: number
}

export class Rect extends AbstractUi<RectData> {
  constructor(data: RectData) {
    super('Rect', data, defaultRectData)
  }

  declare data: RectData
}

export default Rect


