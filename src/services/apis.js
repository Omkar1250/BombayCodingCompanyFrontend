// apiConfig.js
const BASE_URL = process.env.REACT_APP_BASE_URL;

if (!BASE_URL) {
    console.error("REACT_APP_BASE_URL is not set in the environment variables");
}

export const contactEndPoints = {
    CONTACT_US_API: `${BASE_URL}/reach/contact`
};
