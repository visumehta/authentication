import { createReducer, on, Action } from "@ngrx/store";
import { ToasterActions } from "./toaster.actions";

export interface ShowToaster {
    message: string | null;
    
}

const initialState: ShowToaster = {
    message: null,
}

const _toasterReducer = createReducer(
    initialState,
    on(ToasterActions.success, (state, {message}) => ({
        ...state, message
    })),
    on(ToasterActions.error, (state, {message}) => ({
        ...state, message
    }))
)

export function toasterReducer(state: ShowToaster, action: Action) {
    return _toasterReducer(state, action)
}