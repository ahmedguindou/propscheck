import { checkPropTypes } from 'prop-types';
import './App.css';
import Profilee from './profile/profiile';
import Welcome from './Welcome';
function App() {
  const styleObj = {color :"grey" , textAlign : "center" };
  const alertMyInput = name => alert(name);
const name="ahmed"
  return(
    <div style = {styleObj}>
    <Profilee></Profilee>
     <Welcome alertMyInput={alertMyInput}   name={name} />
    </div>
  )
}
Profilee.propTypes = {
  bioo:checkPropTypes.string,
  proo:checkPropTypes.string,
  name:checkPropTypes.string,
}




export default App;
