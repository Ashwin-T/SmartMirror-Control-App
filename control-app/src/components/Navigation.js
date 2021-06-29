
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
    const handleClear = (e) => {
        db.collection('Page').doc('PageNum').set({Page: 3}).then(alert("Switching to Clear Screen"));
    } 

    return (  
        <>
    
            <button className="buttonz" onClick={handleSubmitOne}>One</button>

            <button className="buttonz" onClick={handleSubmitTwo}>Two</button>

            <button className="buttonz" onClick={handleSubmitHome}>Lock</button>

            <button className="buttonz" onClick={handleClear}>Clear</button>

        </>
    );
}
 
export default Navigation;