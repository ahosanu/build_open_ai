# Use a node base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy both the frontend and backend code into the container
COPY ./frontend /usr/src/app/frontend
COPY ./backend /usr/src/app/backend

# Install dependencies for both frontend and backend
RUN cd frontend && npm install
RUN cd backend && npm install

COPY --from=builder /usr/src/app/frontend/dist/app_ui /usr/src/app/backend/app_ui

EXPOSE 80

# Run the application
CMD ["npm", "start"]
