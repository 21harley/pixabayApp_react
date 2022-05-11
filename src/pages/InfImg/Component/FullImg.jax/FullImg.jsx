import { useParams } from 'react-router-dom';
function FullImg() {
  let { id } = useParams();
  return (
    <>
      <div>Hola {id}</div>
    </>
  );
}

export default FullImg;
