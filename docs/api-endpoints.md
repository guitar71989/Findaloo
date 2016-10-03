# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Loos

- `GET /api/loos`
  - Loos index/search
  - accepts `category` query param to list loos by category
  - accepts `rating` query param to list loos by rating
  - accepts `number of reviews` query param to list loos by  number of reviews
  - accepts `location` query param to list loos by nearby location
- `GET /api/loos/:id`
— `POST /api/loos`

### Reviews

- `GET /api/reviews`
    - Reviews index/search
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
