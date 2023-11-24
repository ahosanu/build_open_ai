# Use official node image as the base image
FROM node:20 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy both the frontend and backend code into the container
COPY ./frontend /usr/src/app/frontend
COPY ./backend /usr/src/app/backend

# Install dependencies for both frontend and backend
RUN cd frontend && npm install
RUN cd backend && npm install

RUN mkdir -p /usr/src/app/backend/app_ui

COPY /usr/src/app/frontend/dist/app_ui /usr/src/app/backend/app_ui

WORKDIR /usr/src/app/backend
EXPOSE 80

# Run the application
CMD ["npm", "start"]