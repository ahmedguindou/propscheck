import Bio from "./bio";
import Fln from "./fullName";
import Pro from "./profession";
import Photo from "./image";
function Profilee (){
  return(
    <>
    <Photo >
<img src= 'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@.jpg'alt='pp'/>

    </Photo>
    <Fln name = {"Ahmed Guindou"}/>

    <Bio bioo = {" 21 Years Old "}/> 

    <Pro proo = { "Web Developer"}/>
</>
  )
}
export default Profilee ; 