'use strict'

fetch('api/v0/members')
.then((res) => {
  if (!res.ok) throw new Error('Not OK!')

  return res.json()
})
.then((members) => {
  
  const section = document.querySelector('section');

  members.forEach((member) => {
  //Creating a set of figure elements for each object inside array list.
    const figure = document.createElement('figure');
    section.appendChild(figure);
  
  //Creating h2 element to nest into the figures, this is the name.
    const name = document.createElement('h2');
    name.innerHTML = member.name;
    figure.appendChild(name);

  //Creating h3 element to nest into the figures, this is the title.
    const title = document.createElement('h3');
    title.innerHTML = member.title;
    figure.appendChild(title);

  // Creating anchor element on image
    const github = document.createElement('a');
    github.href = member.github;
    figure.appendChild(github);

  //Creating img element for the profile pic
    const img = document.createElement('img');
    img.src = member.profilePic;
    github.appendChild(img);

  //Creating a figcaption element this includes the persons bio. 
    const figCaption = document.createElement('figcaption')
    figCaption.innerHTML = `${member.bio}`;
    figure.appendChild(figCaption);
  });
})
.catch((error) => {
  console.log(error)
});
