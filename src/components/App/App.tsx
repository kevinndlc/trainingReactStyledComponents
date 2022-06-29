import styled from 'styled-components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
