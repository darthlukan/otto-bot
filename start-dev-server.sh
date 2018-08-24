#!/bin/sh

set -e

echo "Starting mongo:3.0 as db"
docker run --name db -d mongo:3.0 --smallfiles
sleep 5
echo "Starting rocket.chat as rocketchat"
docker run --name rocketchat -p 80:3000 --link db -d rocket.chat
echo "Rocket.Chat started, check http://localhost"
