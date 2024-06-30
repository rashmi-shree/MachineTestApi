
# Machine Test Admin application

It contains information of employees which can be handled by the admin of the organization


# Express ^4.19.2

https://expressjs.com/



## Installation

1. git clone https://github.com/rashmi-shree/MachineTestServer.git
2. cd MachineTestServer
3. update conn.js with your mongodb connect link and dbName
4. npm start

# Link to client code

https://github.com/rashmi-shree/MachineTestClient

    
## Feedback

If you have any feedback, please reach out to me at rashmidivya.shree6@gmail.com


## Authors

- [@Rashmi Shree S](https://github.com/rashmi-shree)


<!-- deploy.sh
#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd MachineTestServer
git pull origin
pm2 kill
pm2 start index.js -->


chmod 600 MachineTestServer.pem
ssh -i MachineTestServer.pem ubuntu@ec2-16-170-228-16.eu-north-1.compute.amazonaws.com
git clone https://github.com/rashmi-shree/MachineTestApi.git
-- install nvm
-- install node
-- cd to the folder
-- npm i 
-- npm i -g pm2
-- pm2 start index.js 
-- pm2 logs
-- pm2 list

To update
-- cd MachineTestApi
-- git pull
-- pm2 kill
-- pm2 start index.js

on ec2 we can do "source ./deploy.sh "

ssh -t -i MachineTestServer.pem ubuntu@ec2-16-170-228-16.eu-north-1.compute.amazonaws.com "sudo bash ~/deploy.sh"

ssh-keyscan ec2-16-170-228-16.eu-north-1.compute.amazonaws.com >> known_hosts

ssh -t -i keyfile ubuntu@ec2-16-170-228-16.eu-north-1.compute.amazonaws.com “sudo bash ~/deploy.sh”
