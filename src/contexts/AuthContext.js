const AuthContext = React.createContext()

export function AuthProvider() {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}