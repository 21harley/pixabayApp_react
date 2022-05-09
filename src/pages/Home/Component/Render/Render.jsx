import GridImages from '../../../../components/gridComponet/gridImages';
function Render() {
  const lista = [
    [
      'Hola',
      'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7'
    ],
    [
      'Hola1',
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?cs=srgb&dl=pexels-joey-farina-2014422.jpg&fm=jpg'
    ],
    ['Hola2', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg']
  ];

  return (
    <div className="main-home">
      <div>
        <h1>Images</h1>
        <GridImages items={lista}></GridImages>
      </div>
      <div>
        <h1>Images</h1>
        <GridImages items={lista}></GridImages>
      </div>
      <div>
        <h1>Images</h1>
        <GridImages items={lista}></GridImages>
      </div>
    </div>
  );
}

export default Render;
