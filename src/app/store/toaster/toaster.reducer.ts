import { createReducer, on, Action } from "@ngrx/store";
import { ToasterActions } from "./toaster.actions";
import { ToasterState } from "./toaster.state";

const initialState: ToasterState = {
    message: null,
}

const _toasterReducer = createReducer<ToasterState>(
    initialState,
    on(ToasterActions.success, (state, {message}) => ({
        ...state, message
    })),
    on(ToasterActions.error, (state, {message}) => ({
        ...state, message
    }))
)

export function toasterReducer(state: ToasterState | undefined, action: Action) {
    return _toasterReducer(state, action)
}