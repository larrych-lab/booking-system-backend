import db from "../firebase/index.js"

const getMenuData =  db.collection("menu").get().then((menuData) => {
    return menuData;
});

export default getMenuData;