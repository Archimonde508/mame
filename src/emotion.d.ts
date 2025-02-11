import '@emotion/react'

import { MameTheme } from './theme/theme'

declare module '@emotion/react' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface Theme extends MameTheme {}
}