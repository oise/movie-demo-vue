## Movie App


### Setup

1. Make sure your have yarn install
2. Run `yarn install`
3. Run `yarn dev`
4. App should be running on https://localhost:3000.



### API Contract

The API contract defaults to `page=1&size=10` to get the initial data. The API uses the `search` param to handle search for movie titles. Filter by `genre` is acheived by passing an additional `genreId` url parameter. If we need to filter by `release date`, a date parameter can also be passed.

The decision to have each search and filter parameters as separate parameters is to allow for combining different filters to get a fine-grained results

An example of a complete search request looks like this:
`?page=1&size=10&search=notebook`
