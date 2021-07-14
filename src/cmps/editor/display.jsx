import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrTemplate } from '../../store/actions/index'
// import { Link } from 'react-router-dom'

import DynamicCmp from '../dynamicCmp';



const Display = () => {
    const dispatch = useDispatch()
    const currTemplate = useSelector((state) => state.currTemplate)
    const renderCmps = () => {
        return currTemplate.cmps.map(cmp => {
            return (
                <div key={cmp.id}> 
                <DynamicCmp cmp={cmp}/>
                </div>
            )
        })
    }



    useEffect(() => {
        dispatch(getCurrTemplate())
    }, [])
    return (
        <div>
            {currTemplate.cmps && renderCmps()}
        </div>
    );
}
export default Display;