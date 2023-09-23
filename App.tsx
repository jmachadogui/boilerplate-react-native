import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import theme from '~/themes';
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MyView />
    </ThemeProvider>
  );
}

const MyView = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${props => props.theme.colors.tertiary};
`;
export default App;
