# Use an official Python runtime as a parent image
FROM python:3.10

# Set environment variable to prevent buffering of Python output
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /react

# Copy the requirements file into the container
COPY requirements.txt .

# Install build dependencies including libmysqlclient-dev
RUN apt-get update \
    && apt-get install -y --no-install-recommends libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install gunicorn
# Copy the rest of the application code
COPY . .


#
