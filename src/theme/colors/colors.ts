type Color = 
    | 'white'
    | 'black'
    | 'linkHover'
    | 'darkBackground'
    | 'scrollThumb'
    | 'scrollTrack'

type Colors = Record<Color, string>

const baseColors: Colors = {
    white: '#FFFFFF', // white
    black: '#000000', // black
    linkHover: '#535bf2', // plum purple
    darkBackground: '#14144', // Dark gray 
    scrollThumb: '#444', // Really Fair Gray
    scrollTrack: '#222' // Fair Gray
}

export { baseColors }
export type { Color, Colors }