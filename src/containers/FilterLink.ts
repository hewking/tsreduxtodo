import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/index'
import Link from '../components/Link'
import { stat } from 'fs';
import { Dispatch } from 'redux';

interface FilterLinkState {
    visibilityFilter : string
}

interface OwnProps {
    filter : string
}

const mapStateToProps = (state : FilterLinkState,ownProps : OwnProps) =>{
    return {
        active : ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch : Dispatch,ownProps : OwnProps) => {
    return {
        onClick : () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link)

export default FilterLink