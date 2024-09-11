import axios from "axios";

// Retrieve and parse the token
const getToken = (): string => {
    const token = localStorage.getItem("reachinbox-auth");
    return token ? JSON.parse(token) : "";
};

// Get mail list
export const getMailList = (token: string) => {
    return axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.data.data)
      .catch(err => {
          console.error("Error fetching mail list:", err);
          throw err; // Rethrow error for potential further handling
      });
};

// Get mail messages by ID
export const getMailMessages = (id: number) => {
    const token = getToken();
    return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.data.data)
      .catch(err => {
          console.error("Error fetching mail messages:", err);
          throw err; // Rethrow error for potential further handling
      });
};

// Post mail messages
export const postMailMessages = (id: number, messages: any) => {
    const token = getToken();
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`, messages, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        console.log("Posted:", res.data);
        return res.data;
    }).catch(err => {
        console.error("Error posting mail messages:", err);
        throw err; // Rethrow error for potential further handling
    });
};

// Delete mail response by ID
export const deleteMailResponse = (id: number) => {
    const token = getToken();
    return axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        console.log("Deleted:", res);
        return res;
    }).catch(err => {
        console.error("Error deleting mail response:", err);
        throw err; // Rethrow error for potential further handling
    });
};

// Reset mail
export const resetMail = (token: string | null) => {
    return axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/reset', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        console.log("Reset:", res);
        return res;
    }).catch(err => {
        console.error("Error resetting mail:", err);
        throw err; // Rethrow error for potential further handling
    });
};
