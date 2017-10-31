### Setup
  * Fork, clone, yarn install, yarn start
### Let's fetch users
  X Go to this URL in your browser, https://jsonplaceholder.typicode.com/users
  X Study the JSON format to understand what type of data it returns
  X Now you need your running code to be able to retrieve this data so that you can use it to make a webpage.
  X In index.js, make a fetch call to the url
  X Specify the callback function usersRetrieved to handle when the fetch call is done, .then()
  X Specify the callback function userJSONReady to handle when the json is ready, .then()

### Let's fetch comments
  X Go to this URL in your browser, https://jsonplaceholder.typicode.com/comments
  X Study the JSON format to understand what type of data it returns
  X In index.js, make a fetch call to the url

  X Try using inline functions as the callbacks to the .then()
  X Use usersRetreived as an example of how to put the data into the webpage
  X Loop through the comments array and create a div for each one that shows the comment name.

  X Set the innerHTML of a div with id = comments
