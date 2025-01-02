import Component2 from "../Components/ContextComponents/Component2"
import React from "react";
var ThemeProvider = React.createContext();
var ExamResults = () => {
    return (
        <div>
            <ThemeProvider.Provider value={{ cgpa: "10.00" }}>
                <h1>This is  an example of UseContext</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </div>
    )
}
export default ExamResults;