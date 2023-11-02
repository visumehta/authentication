import { createAction, createActionGroup, props } from "@ngrx/store";

export const successToaster = createAction('[Success Toaster] Success Toaster Message', props<{message: string}>());
export const errorToaster = createAction('[Success Toaster] Success Toaster Message', props<{message: string}>());


export const ToasterActions = createActionGroup({source: "Toaster Message",events:{
    "Success" : props<{message: string}>(),
    "Error" : props<{message: string}>(),
}})