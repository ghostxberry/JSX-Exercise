/* Part 1 */

/*const FirstComponent = () => {
    return <h1>My very first component</h1>
    }
    
const NamedComponent = (props) => {
   return <p>My name is {props.name}.</p>
}*/
    

    /*const App = () => {
    return (
       <div>
            <FirstComponent />
            <NamedComponent name="Becca" />
       </div>
       )
    } */
    
    
/* Part 2 */

 /*   const Tweet = (props) => {
      return (
         <div className="tweet">
            <p className="username">{props.username}</p>
            <p className="name">{props.name}</p>
            <p className="date">{props.date}</p>
            <p className="content">{props.tweet}</p>
         </div>
      );
   }
   
const App = () => {
   return (
      <div>
           <Tweet username = "pizzalover" name = "Henry" date = "02/13/24" tweet = "man i love pizza" />
           <Tweet username = "pizzahater" name = "George" date = "02/15/24" tweet = "pizza sucks" />
           <Tweet username = "craftycathy" name = "Cathy" date = "02/15/24" tweet = "Oragami time!" />
      </div>
      )
   } */

/* Part 3 */
    
const Person = (props) => {
  const displayName = props.name.length > 8 ? props.name.substring(0, 6) + '...' : props.name;
   return (
      <div>
         <p><h1>{displayName}</h1></p>
         <p>Learn some information about this person:</p>
         {props.age >= 18 ? <h2>Please go vote!</h2> : <h2>You must be 18</h2>}
         <h2>{displayName}'s hobbies:</h2>
      <ul>
        {props.hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
      </div>
   );
}

const App = () => {
   return (
      <div>
           <Person age = {24} name = "Alexandria" hobbies = {["Reading", "Painting", "Hiking"]}/>
      </div>
      );
   }


    ReactDOM.render(<App/>, document.getElementById("root"))