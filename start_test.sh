#!/bin/bash
# need chmod +
sudo docker compose up;
sudo docker stop $(sudo docker ps -a -q);
sudo docker rm $(sudo docker ps -a -q);
sudo docker rmi $(sudo docker images --format="{{.Repository}} {{.ID}}" |
                  grep "^alliance-it-frontend-web" | cut -d' ' -f2);
sudo docker network rm react_frontend_bike_rent_frontend;
sudo rm -r dump/;