import Nav from '../../components/nav/Nav';
import Render from './Component/Render/Render';

function Home() {
  return (
    <div className="grid__Home">
      <Nav search={true}></Nav>
      <Render></Render>
    </div>
  );
}

export default Home;
