# twatt-recent

this app is use to search timeline

# API
| END POINT                               | HTTP METHOD | DESCRIPTION                                                                       |
|-----------------------------------------|-------------|-----------------------------------------------------------------------------------|
| http://localhost:3000/search/:search    | GET         | search tweet that you want to find                                                |
| http://localhost:3000/timeline?count=10 | GET         | show tweet timeline, and change the value of 10 to show how many you want to show |
| http://localhost:3000/search/actorTweet/movie?title=your_movie_title&select=number | GET | change title value with movie that you want to search, and after that the data respon is tweet actor movie that you search |

# Setup
```
first you need to create file ".env" and fill that file with :

CUSTOMER_KEY='your customer key'
CUSTOMER_SECRET='your customer secret'
ACCESS_TOKEN='yout access token'
ACCESS_TOKEN_SECRET='access token secret'
```

# Useage
```
1. npm insatll
2. npm start
```
