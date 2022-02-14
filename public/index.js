/* let's go! */
const fetch = (method, url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open(method, url);
    xhr.send();
  };
  
  const dataDetails = (data) => {
    console.log(data);
    img.src = data.avatar_url;
    nameRepo.textContent = data.name;
    repo.textContent = data.public_repos;
  };
  const dataRepo = (data) => {
    console.log(data);
    let stars = 0;
    let watches=0;
    data.forEach(element => {
      stars += element.stargazers_count;
    });
  
    let lan =data.map(e=>{
     return e.language
    });
    data.forEach(ele => {
      watches += ele.watchers_count;
   
    });
  
    starRepo.textContent = stars;
    lang.textContent = lan;
    watch.textContent = watches;
    create.textContent =data[0].created_at;
  
  
  };
  
  
  const nameRepo = document.querySelector("#github-user-link");
  const img = document.querySelector("#github-user-avatar");
  const repo = document.querySelector("#github-user-repos");
  const lang = document.querySelector("#github-repos-languages");
  const starRepo = document.querySelector("#github-repos-stars");
  const create = document.querySelector("#github-repo-created");
  const issues = document.querySelector("#github-repo-open-issues");
  const watch = document.querySelector("#github-repo-watchers");
  const contribute = document.querySelector("#github-repo-contributors");
  const url = "https://api.github.com/users/EngNajlaa";
  const urlRepo = "https://api.github.com/users/EngNajlaa/repos";
  
  fetch("Get", url, dataDetails);
  fetch("Get", urlRepo, dataRepo);
  