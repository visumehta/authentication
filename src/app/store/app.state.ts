import { AuthState } from "./auth/auth.state";
import { ToasterState } from "./toaster/toaster.state";

export interface AppState {
    auth: AuthState;
    toaster: ToasterState;
}