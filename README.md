# URL Shortener

This is a simple URL shortening application built using Node.js, Express, and TypeScript. The application provides an API to shorten URLs and retrieve the original URLs using shortened versions. It also tracks the most frequently shortened domains.

## Features
- Shorten a URL.
- Retrieve the original URL using the shortened URL.
- Get the top 3 most shortened domains.
- Store data in-memory (no database required).
- Docker support for easy deployment.

---

## Running the Application Locally

### Prerequisites

- Node.js (v16 or above)
- Docker (optional, if you prefer using Docker)

### 1. **Running Locally Without Docker**

#### Step 1: Clone the Repository

```bash
git clone https://github.com/Abhi200206/url-shortener.git
cd url-shortener
```

#### Step 2: Install Dependencies

```bash
npm install
```

#### Step 3: Run the Application

```bash
npm run dev
```

The server will be running on `http://localhost:5000`.

### 2. **Running Locally Using Docker**

#### Step 1: Build the Docker Image

Ensure you are in the root directory of your project and run:

```bash
docker build -t url-shortener .
```

#### Step 2: Run the Docker Container

Once the image is built, you can run the container:

```bash
docker run -p 5000:5000 url-shortener
```

The application will be accessible at `http://localhost:5000`.

### 3. **Running Using Pre-built Docker Image from Docker Hub**

The image is also available on **Docker Hub**. You can use the pre-built image to run the application locally without building it yourself.

#### Step 1: Pull the Image

```bash
docker pull abhi200206/url-shortener:latest
```

#### Step 2: Run the Docker Container

```bash
docker run -p 5000:5000 abhi200206/url-shortener:latest
```

The application will be accessible at `http://localhost:5000`.

[Docker Hub Link](https://hub.docker.com/r/abhi200206/url-shortener)

---

## API Routes

### 1. **POST /shorten**

This route is used to shorten a URL.

**Request Body:**

```json
{
  "originalUrl": "https://example.com"
}
```

**Response:**

```json
{
  "originalUrl": "https://example.com",
  "shortUrl": "http://localhost:5000/abc123"
}
```

### 2. **GET /:shortUrl**

This route is used to redirect to the original URL based on the shortened URL.

**Example Request:**

```http
GET http://localhost:5000/abc123
```

**Response:**

The user will be redirected to the original URL (e.g., `https://example.com`).

### 3. **GET /metrics/top-domains**

This route returns the top 3 most shortened domains.

**Response:**

```json
[
  {
    "domain": "youtube.com",
    "count": 6
  },
  {
    "domain": "google.com",
    "count": 4
  },
  {
    "domain": "wikipedia.org",
    "count": 2
  }
]
```

---

## Docker

### Dockerfile

The project includes a `Dockerfile` to build the application into a Docker image. Here's a brief explanation of the steps:

1. **Build the Docker image:**
   ```bash
   docker build -t url-shortener .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 5000:5000 url-shortener
   ```

The application will be accessible on `http://localhost:5000`.

---

## Running Tests

### Step 1: Install Dependencies

If you haven't already, install the necessary dependencies for testing:

```bash
npm install --save-dev jest ts-jest @types/jest
```

### Step 2: Running the Tests

Run the tests with the following command:

```bash
npx jest
```

The tests will run and validate the functionality of the URL shortening application.

---

## Why I Chose Node.js

I chose **Node.js** for this project because of the following reasons:

- **Non-blocking I/O**: Node.js handles multiple requests efficiently, which is ideal for a web service like this where the application might receive many requests simultaneously.
- **JavaScript/TypeScript**: As a JavaScript/TypeScript developer, I wanted to leverage the language I am familiar with to build this API. TypeScript also provides strong typing, which helps with better code quality and maintainability.
- **Express**: Express is a minimal web framework for Node.js that makes setting up the API routes quick and easy, which allowed me to focus on building the core features of the project.

---

## My Interest in Learning Go

Although I chose Node.js for this project, I am also interested in learning **Go** (Golang) because:

- **Performance**: Go is known for its high performance, especially for concurrent tasks. It’s well-suited for building high-performance web servers and microservices, which aligns with my long-term interest in backend development.
- **Simplicity and Concurrency**: Go has a simple syntax, and its concurrency model (goroutines and channels) makes it easy to handle multiple tasks simultaneously, which is highly beneficial for building scalable systems.
- **Growing Ecosystem**: With Go's increasing popularity in the DevOps and microservices space, I am excited to explore it for future projects, particularly when working on systems that need to scale efficiently.

---

## Conclusion

This URL Shortener project demonstrates basic functionality using Node.js and Docker. The source code is available in this repository, and you can easily run it locally either using Node.js directly, Docker, or the pre-built image from Docker Hub. The API routes are simple to use, and the Docker setup ensures smooth deployment.

---
