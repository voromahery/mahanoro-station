import { connect } from 'react-redux';
import { getData } from '../actions/data';
import Header from './Header';

function mapStateToProps(state) {
    console.log(state);
	return {
		data: state.data,
	};
}

const mapDispatchToProps = {
	getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
