[FindIT Application](https://infoshareacademy.github.io/jfdzr2-all-you-need-is-code/#/) <img width="250px" text-align="right" alt="KRAB logo" src="./src/logo/FindIT.png" />

### About

FindIt is a social media web application developed in ReactJS using Firebase that is meant to help IT community members find partners for their projects, search for projects to join, as well as share their work and chat with other developers.

This is a project developed during a 6-months long "Junior Frontend Developer" bootcamp organized by InfoShare Academy. The main goal was to create a complex ReactJS web application using knowledge gained during the course. 

It was created by a team: 
- [Daria Zalewska](https://github.com/daria-zalewska) 
- [Michał Nielubszyc](https://github.com/MichalNielubszyc) 
- [Kamil Plewka](https://github.com/Kamil12a)

### Environment, backend & deployment

FindIT web application was written in ReactJS. We developed it using React Hooks: useState for app state management, useEffect for fetching data, manual changes of DOM and other, useContext for passing data between components.

Backend features were implemented using Firebase. We used Firestore Database to store data: users and their data, posts with comments and likes, as well as chat messages. Authentication allowed us to create sing up & log in system. Storage helped us keep our users' avatars.

FindIT has been deployed via Github Pages, create your profile, post and communicate with others: <a href="https://infoshareacademy.github.io/jfdzr2-all-you-need-is-code/#/" target="_blank">Link to page</a>

### Features

What you can do using FindIT app:

1. Sign up and create your profile
    - create your account using Firebase Authentication
    - fill our wizard form survey with information like: your name, what's your aim (to join a project etc.), experience, location, github & linkedIn profiles, your IT projects and section about you.
    - pick your avatar
    - then you can edit your data in your profile page 

<div display="flex">
<img alt="survey1 photo" src="./src/photos/readme/survey0.png" width=386">
<img alt="survey2 photo" src="./src/photos/readme/survey1.png" width="386">
</div>