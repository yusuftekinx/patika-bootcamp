import UserService from "./userService.js";
import PostService from "./postService.js";

async function getData(userId) {
  try {
    const user = await UserService(userId);
    const posts = await PostService(userId);
    return {
      ...user,
      posts: [...posts],
    };
  } catch (err) {
    console.log("Bir Problem Oluştu");
  }
}

getData(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
