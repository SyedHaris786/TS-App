###Folder Structure
## Routes
    Routes will define the endpoints 
## Controller 
    Will validate request respons
## Service 
    Business logic
## Repo 
    Queries and ORM

## How to Run

1. To run dev enviornment
```bash 
npm run dev
```
2. To build 
```bash 
npm build 
```
3. To run linter 
```bash 
npm run lint
```

## Env Variable
Create .env file as per the the sample env file (.env.sample)

## To run dockerized image 
1. Create an image
```bash 
docker build -t container-name .
``` 
2. Run container
``` 
docker run -dp 3000:3001 getting-started
```
