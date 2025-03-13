function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "shivam", url: "https://shivamgaur.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchData();
    console.log("user data successfully fetched");
    console.log("user data", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

// getUserData();

// ==================================== PART-2 =====================================

function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "shivam", likes: 234, comments: 23 });
    }, 2000);
  });
}

function fetchProfileData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ posts: 44, followers: 230343, following: 213 });
    }, 3000);
  });
}

async function getUserPostData() {
  try {
    console.log("fetching....");
    // let postdata = await fetchPostData();
    // let profileData = await fetchProfileData();

    let [postdata, profileData] = await Promise.all([
      fetchPostData(),
      fetchProfileData(),
    ]);

    console.log("User Post data", postdata);
    console.log("User profile data", profileData);
  } catch (error) {
    console.log("Error in fetching", error);
  }
}

getUserPostData();
