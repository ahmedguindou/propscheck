import PropTypes from 'prop-types';

function Pro(props) {
    return(
        <div>
            <h1>{props.proo}</h1>
        </div>
    )
}
export default Pro ;
Pro.propTypes = {
    proo:PropTypes.string,
  }
  Pro.defaultProps = {proo:"no profession "}