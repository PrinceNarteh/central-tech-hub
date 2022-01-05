import styled from "styled-components";
import { Container } from "./components/styles";
import { Theme } from "./theme";

function App() {
  return (
    <Container>
      <Text>Central Tech Hub</Text>
    </Container>
  );
}

const Text = styled.h1`
  color: ${({ theme }: { theme: Theme }) => theme.colors.primaryColor};
`;

export default App;
