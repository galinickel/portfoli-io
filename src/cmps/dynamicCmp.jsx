import { React } from 'react'




const DynamicCmp = props => {
    const { id, type, style, info } = props.cmp
    return (
        <div style={style}>
            <p>
                id: {id}
            </p>
            <p>
                type:{type}
            </p>
        </div>
    );
}
export default DynamicCmp;