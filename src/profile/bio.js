import PropTypes from 'prop-types';

function Bio(props) {
    return(
        <div>
            <h1>{props.bioo}</h1>
        </div>
    )
    
}
export default Bio ;

Bio.propTypes = {
    bioo:PropTypes.string
  }
  Bio.defaultProps = {bioo:"no bio"}