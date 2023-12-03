const BASE_URL = "https://jsonplaceholder.typicode.com";

export const API = {
  getPosts: async () => {
    try {
      const resp = await fetch(`${BASE_URL}/posts`);
      if (!resp.ok) throw new Error("Ошибка получения постов");
      const data = resp.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
