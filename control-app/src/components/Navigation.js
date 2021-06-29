
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
    // const handleRefresh = (e) => {
    //     window.location.reload.then();
    // }

    return (  
        <>
    
            <button className="buttonz bntNav" onClick={handleSubmitOne}>One</button>

            <button className="buttonz btnClock" onClick={handleSubmitTwo}>Two</button>

            <button className="buttonz bntTodo" onClick={handleSubmitHome}>Lock</button>

            <button className="buttonz" >Refresh</button>

        </>
    );
}
 
export default Navigation;