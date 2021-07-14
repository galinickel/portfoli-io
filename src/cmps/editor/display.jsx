import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrTemplate } from '../../store/actions/index'
// import { Link } from 'react-router-dom'




const Display = () => {
    const dispatch = useDispatch()
    const currTemplate = useSelector((state) => state.currTemplate)

    useEffect(() => {
        dispatch(getCurrTemplate())
    }, [])
    return (
        <div>
            Display
            {currTemplate.cmps && <p>Current template has {currTemplate.cmps.length} components.</p>}
        </div>
    );
}
export default Display;