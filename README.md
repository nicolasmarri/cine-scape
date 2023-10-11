# CineScape-app

## Description
CineScape is an application that allows users to search for and view movie details. Users can watch the movie trailer and get an overview of the film.

## Table of Contents
- [Setup](#setup)
- [Usage](#usage)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [Interfaces](#interfaces)
- [Pages](#pages)

## Setup

### Requirements
- Node.js
- npm or yarn

### Installation
bash
git clone <repository-url>
cd CineScape-app
npm install

## Usage
- Each user must create an .env file for the environment variables with the API_KEY according to each user's keys.
- To run the project in development mode:
npm run dev


## Components
- Navbar: Top navigation bar that contains the search bar.
- Footer: Application footer.
- MovieCard: Individual movie card.
- MovieList: List of searched or suggested movies.
- MovieOverview: Detailed overview of a selected movie.
- TrailerModal: Modal that displays a movie's trailer.

## Custom Hooks
- useMovieDetail: Hook for fetching specific movie details.
- useMoviesList: Hook for searching and listing movies.

## Interfaces
- Movie: Interface for movie data.
- Video: Interface for videos related to a movie.
- MovieApiResponse: Interface for the movie API response.

## Pages
- Home: Main page displaying the list of movies.
- ErrorPage: Error page to handle not found routes or unexpected errors.
- MovieDetails: Page displaying full details of a selected movie.


License
MIT License. See LICENSE file for more details.

Created with ❤️ by Pablo Nicolas Marri.
