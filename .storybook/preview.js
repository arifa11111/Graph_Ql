import { CssBaseline } from "@mui/material";
import { ThemeProvider} from "@mui/material/styles";
import { theme } from "../src/Theme";

import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story) => {
  return (
        <ThemeProvider theme={theme}>
          <Story/>
        </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

addParameters({
  viewport:{
    viewports:INITIAL_VIEWPORTS,
  },
  })