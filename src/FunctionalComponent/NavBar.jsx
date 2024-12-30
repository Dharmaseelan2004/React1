import '../assets/css/NavBar.css'

const NavBar = () => {
    
    const styling = {
      fontSize: "30px",
      textDecoration: "underline", 
      color: "blue",
    };
  
    return (
      <div>
        <header>
          
         
        
        <h1 style={styling}>This is the Navigation Bar</h1>
        <h2 id="idSEg">Testing Style</h2>
        <h1 className="box-model">Hello </h1>
       
        </header>
      </div>
    );
  };
  
  export default NavBar;
  