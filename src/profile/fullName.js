import PropTypes from 'prop-types';

function Fln(props) {
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default Fln ;
Fln.propTypes = {
    name:PropTypes.string,
  }
  Fln.defaultProps = {name:"no name "}