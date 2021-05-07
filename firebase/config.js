import dotenv from "dotenv"
dotenv.config();

const firebaseConfig = {
	apiKey: process.env.APP_API_KEY,
	authDomain: process.env.APP_AUTH_DOMAIN,
	projectId: process.env.APP_PROJECT_ID,
	storageBucket: process.env.APP_STORAGE_BACKET,
	messagingSenderId: process.env.APP_MESSAGE_SENDER_ID,
	appId: process.env.APP_ID,
};

export default firebaseConfig;