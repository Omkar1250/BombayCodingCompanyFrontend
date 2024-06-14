import toast from "react-hot-toast";
import { contactEndPoints } from "../apis";
import { apiConnector } from "../apiConnector";

const { CONTACT_US_API } = contactEndPoints;

export const contactUsMessage = async (data) => {
    const toastId = toast.loading("Loading...");
    console.log(data, "---------------------------------");
    
    try {
        const response = await apiConnector("POST", CONTACT_US_API, data, {
            "Content-Type": "multipart/form-data",
        });
        console.log("CONTACT_US_API_RESPONSE", response);
        
        toast.success("Success! We will get back to you shortly");
    } catch (error) {
        console.log("CONTACT_US_API_ERROR", error);
        
        toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
    } finally {
        toast.dismiss(toastId);
    }
};
