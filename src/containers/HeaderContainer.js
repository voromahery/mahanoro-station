import { connect } from 'react-redux';
import { getData } from '../actions/data';
import Headers from './Header';

function mapStateToProps(state) {
	return {
		data: state.data,
	};
}

const mapDispatchToProps = {
	getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
