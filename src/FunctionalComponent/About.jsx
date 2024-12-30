
const  About = (props) => {

    return(
        <div>
           <section>
             <h1>This is About Component</h1>
             <h2>This is teaching in {props.college} college</h2>
             <h3>Fields of Study: {props.fields}</h3>
           </section>
        </div>
    )
}
export default About;