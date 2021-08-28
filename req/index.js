import axios from "axios";

const api = axios.create({
  baseURL: "http://194.62.43.132"
});

export const About = {
  getBiography: () => {
    return api({
      method: "GET",
      url: "/about/Biography"
    });
  },
  getFAQ: () => {
    return api({
      method: "GET",
      url: "/about/QuestionAnswer"
    });
  },
  getSocialMedia: () => {
    return api({
      method: "GET",
      url: "/about/SocialMedia"
    });
  },
  contact: data => {
    return api({
      method: "POST",
      url: "/about/Contact",
      data: data
    });
  }
};

export const Comments = {
  getComments: () => {
    return api({
      method: "GET",
      url: "/comment/Comment"
    });
  },
  getCommentBox: () => {
    return api({
      method: "GET",
      url: "/comment/CommentBox"
    });
  }
};

export const Services = {
  getAllWorkSamples: () => {
    return api({
      method: "GET",
      url: "/service/ListWorkSample"
    });
  },
  getAllProductOrders: () => {
    return api({
      method: "GET",
      url: "/service/ListProductOrder"
    });
  },
  getRandomProductOrder: () => {
    return api({
      method: "GET",
      url: "/service/GetRandomObjectProductOrder"
    });
  },
  getRandomWorkSample: () => {
    return api({
      method: "GET",
      url: "/service/Get6RandomObjectWorkSample"
    });
  },
  getWorkSampleDetail: id => {
    return api({
      method: "GET",
      url: `/service/DetailWorkSample/${id}`
    });
  }
};
