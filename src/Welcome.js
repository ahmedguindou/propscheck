const Welcome = props => {
    console.log(`props:`);
    return (
      <button onClick={() => props.alertMyInput(`My name is ${props.name} `)}>
        ClickMe
      </button>
    );
   };
   export default Welcome ; 