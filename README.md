# mern-post-buck
---

## API
### Auth
**/api/v1/auth**

`/register` - POST  - register user

`/login`    - POST  - login user

`/logout`   - POST   - logout user

### Users
**/api/v1/users**

`/`         - GET - get all users [admin]

`/:id`      - GET - get user profile

`/:id/friends`  - PATCH - add friend

`/:id/friends`  - DELETE  - delete friend


### Posts
**/api/v1/posts**

`/` - GET - get all posts

`/` - POST  - create post

`/:userId/posts`  - GET - get users posts

`/:userId/posts`  - DELETE  - delete post by id

`/:postId/like` - PATCH - like/dislike post

