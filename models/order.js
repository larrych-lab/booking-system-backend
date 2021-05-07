import db from "../firebase/index.js"

let data = [];
const getMenuData =  db.collection("menu").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
});

export default data;