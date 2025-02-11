type Color = 
    | 'white'
    | 'black'

type Colors = Record<Color, string>

const baseColors: Colors = {
    white: '#FFFFFF',
    black: '#000000'
}

export { baseColors }
export type { Color, Colors }