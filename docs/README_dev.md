# Findaloo

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Loo is a web application inspired by Yelp built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Users (new account creation, login, and guest/demo login)
- [ ] Restrooms (pictures, reviews, location, )
- [ ] Reviews (Comment + 5-point rating)
- [ ] Google Maps integration to locate public restrooms;
- [ ] Search by name, rating, and location
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Loo Model, API, and components (2 days)

**Objective:** Loo can be created, mapped destroyed through
the API.

- [ ] `Loo` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for loos (`LoosController`)
- [ ] JBuilder views for loos
- [ ] Loo components and respective Redux loops
  - [ ] `LooIndex`
  - [ ] `LooIndexItem`
  - [ ] `LooDetail`
- [ ] Style loo components
- [ ] Seed loos

### Phase 3: Google API Integration, and components (2 days)
- [ ] Create LooMap component
- [ ] Create parent component Search
- [ ] Render SearchContainer
- [ ] Attach a GoogleMap to LooMap
- [ ] Add MarkerManager on the Map that relate to Loos
- [ ] Add filtering by Map location
- [ ] Style map components

### Phase 3: Reviews (2 days)

**Objective:** Reviews belong to Users and Loos and can be created, read, edited and destroyed through the API.

- [ ] `Reviews` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for reviews (`ReviewsController`)
- [ ] JBuilder views for reviews
- [ ] Adding reviews requires a loo and a current_user
- [ ] Review components and respective Redux loops
    - `ReviewIndex`
    - `ReviewIndexItem`
    - `ReviewForm`
- [ ] Add top review to LooIndexItem
- [ ] Seed reviews

### Phase 4: Search (2 days)

**Objective:** Loos can be searched by rating, location, category, and number of reviews.

- [ ] Searching loos by rating
- [ ] Searching loos by location
- [ ] Searching loos by category
- [ ] Searching loos by number of reviews
- [ ] Review functionality


### Bonus Features (TBD)
- [ ] Pagination / infinite scrolling
- [ ] User profiles
- [ ] Adding loos form
- [ ] Mark reviews funny, cool, useful etc.
