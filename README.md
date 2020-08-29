# Kettle
This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.

## Important Links
- [API Repo](https://github.com/C2C-NeedABr/kettle-api)
- [Deployed API](https://fathomless-castle-00355.herokuapp.com/)
- [Deployed Client](c2c-needabr.github.io/kettle-client/)

### Planning Story
Our team started out with the skeleton the the styling of the Twitter page that Patrick designed for us. From there, we decided to play off of the buzz phrase "that's the tea" to create a site for tea enthusiasts...both of the beverage and of the pop culture metaphor. With Twitter in mind, we first set up the homepage as a feed to view the posts, or tea, served by all users of the application. In V1 there is no way to limit your feed to view only a curated list of user's posts.

The profile page and friend's profiles are simliar in design with the major difference being in the API call to restrict the posts only to a certain owner. Of course, on your friend's wall you cannot edit or delete a post like you can on your own.

### User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to add a post to my wall.
- As a signed in user, I would like to update a post on my wall.
- As a signed in user, I would like to delete a post on my wall.
- As a signed in user, I would like to see all my posts.
- As a signed in user, I would like to view a list of other users and view their walls.

## Technologies Used
- React
- React Hooks
- JSX
- CSS
- JavaScript
- Bootstrap
- Handlebars
- jQuery

### Unsolved Problems
1. In V2 we would like to allow users to curate a followers list that would restrict the posts appearing on the feed.
2. In V2 we would also like to add a comments functionality to allow for user-user interaction

## Wireframe
[Wireframe](https://imgur.com/BJKU7sP)
