# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## loos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
address     | string    | not null
city        | string    | not null
postal_code | string    | not null
lat         | double    |
lng         | double    |
category    | string    | not null
hours       | string    | not null
hand_access | boolean   | not null, default: false
reviews     | float     | not null, default: 0.0
review_count| integer   | not null, default 0


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
users_id    | integer   | not null, foreign key (references users), indexed
loo_id      | integer   | not null, foreign key (references loos), indexed
body        | text      | not null
rating      | integer   | not null

## images

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
image_type  | string    | not null
image_id    | integer   | not null, foreign key (references users or loos), indexed
