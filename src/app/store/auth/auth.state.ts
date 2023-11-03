export interface AuthState {
    username: string | null;
    password: string | null;
    isLoggedIn: boolean;
    error: string | null;
}