export function MainPageWrapper({ children }) {

    return <div style={
        {
            
            display:'flex',  
            justifyContent:'center'  
        }
    }>
        {children}
    </div>
}