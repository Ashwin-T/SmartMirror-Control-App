
import firebase from "./firebase";

const db = firebase.firestore();

const Navigation = () => {

    const handleSubmitHome = (e) => {
        db.collection('Page').doc('PageNum').set({Page: 0}).then(alert("Switching to Lock Screen"));
    }
    const handleSubmitOne = (e) => {
        db.collection('Page').doc('PageNum').set({Page: 1}).then(alert("Switching to Main Screen One"));
    }
    const handleSubmitTwo = (e) => {
        db.collection('Page').doc('PageNum').set({Page: 2}).then(alert("Switching to Main Screen Two"));
    }

    return (  
        <div>
            <button className="bntTodo" onClick={handleSubmitHome}>Lock</button>
    
            <button className="bntNav" onClick={handleSubmitOne}>One</button>

            <button className="btnClock" onClick={handleSubmitTwo}>Two</button>
        </div>
    );
}
 
export default Navigation;