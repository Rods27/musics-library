import 'styled-components';

import type theme from '../styles/Theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
