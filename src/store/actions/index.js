import { editorService } from "../../services/editor.service";

export const getCurrTemplate = () => async dispatch => {
    const res = await editorService.getCurrTemplate()
    dispatch({ type: 'SET_TEMPLATE', payload: res })
}