import Nav from '../../components/nav/Nav';
import FullImg from './Component/FullImg.jax/FullImg';
function InfImg() {
  return (
    <>
      <div className="grid__Home">
        <Nav search={false}></Nav>
        <FullImg></FullImg>
      </div>
    </>
  );
}

export default InfImg;
