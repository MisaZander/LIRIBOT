# LIRIBOT
## App Summary
A simple CLI app that makes use of the Spotify API, Bandsintown API, and OMDB API to take in a simple query and return a set of search results.

## Available Commands
* spotify-this-song
  * Search the Spotify API for a particular song
* concert-this
  * Search Bandsintown for a band and get a list of upcoming concerts
* movie-this
  * Search OMDB for a movie and get details about a movie
* do-what-it-says
  * Read the "random.txt" file in the folder and execute one of the above commands based on the content (see below)
  
## Syntax
#### node liri command [query] ...
Most terminals treat spaces in the CLI as seperate commands. This program reads every argument written after the initial command into a single string and assembles a query from it. Therefore, you can write your query in the prompt with or without quotation marks.

## Examples
#### node liri spotify-this-song "Carry On"
Search Spotify for the the song "Carry On"

#### node liri spotify-this-song Carry On
Same query as previous command without quotes. Returns the same results.

#### node liri concert-this
A Bandsintown query without a specified search term. If no search term is supplied, each command will supply their own default.

Quick setup and example use video: https://youtu.be/1PLehmaonlM

## Setup
1. You will need to supply a ".env" file that contains a client id and secret id from the Spotify Developers website after you clone the repository to your machine. To obtain these ids, go to https://developer.spotify.com/dashboard/ and log in with a free or premium account. Create a new web app from your dashboard and access the app to obtain the necessary ids. Finally, create a ".env" file with the following in it and add the new ids:
```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```
2. Install NPM and Node.js if necessary.
3. Navigate to the repository in your terminal.
4. Run "npm install" to install the dependencies.
5. You may now run any of the commands above.

## Random.txt
The "do-what-it-says" command relies on the existence of the random.txt file. The contents of random.txt must be a single line with a command and a query in quotes with no whitespace around or near the comma. Example:
* spotify-this-song,"I Want it That Way"
