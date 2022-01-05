import { Container } from "./components/styles";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Title as="h1" fontSize={5}>
          Central Tech Hub
        </Title>
      </Container>
    </>
  );
}

export default App;
