import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID rBdJPIgzHeVb5wwnlFJetFu9ZBzJ705Z1nvxAFdYEiM",
  },
});
