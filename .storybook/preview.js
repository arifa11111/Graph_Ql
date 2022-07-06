import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "@mui/styles";
import {theme} from "../src/Theme/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
        <ThemeProvider theme={theme}>
          {Story()}
        </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
addParameters({
  viewport:{
    viewports:INITIAL_VIEWPORTS,
  },
})