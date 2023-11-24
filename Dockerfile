# Use official node image as the base image
FROM node:20 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy both the frontend and backend code into the container
COPY ./frontend /usr/src/app/frontend
COPY ./backend /usr/src/app/backend

WORKDIR /usr/src/app/frontend
# Install dependencies for both frontend and backend
RUN npm install 
RUN ng build

WORKDIR /usr/src/app/backend

RUN npm install
RUN mv /usr/src/app/frontend/dist/app_ui /usr/src/app/backend/app_ui


EXPOSE 80

# Run the application
CMD ["npm", "start"]