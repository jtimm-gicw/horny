

function HornedBeast(props) {

  return (
    <>
      <h2>{props.title}</h2>
      <img
        src={props.imageUrl}
        alt={props.description}
        title={props.title}
        style={{ width: '20%' }}
      />
      <p>{props.description}</p>
    </>
  );
}

export default HornedBeast;