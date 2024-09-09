# meow-on-rail
- version 2 of rails this is new repository from puriwt-co-op-tests-ruby-on-rails because install version of rails incorect
- if wanna see all old commited it's in this: https://github.com/Puriwt/puriwt-co-op-tests-ruby-on-rails.git
- (start in 5-6 sep.)

# start rails 
- rails s or rails server

# init github
- create your repository 
- git init
- git add .
- git commit -m "Initial commit"
- git remote add origin https://github.com/your-username/repository-name.git
- git branch -M main
- git push -u origin main

# gen model
- rails generate model [table_name] [colunm1]:[type] [colunm2]:[type]
- rails db:migrate

# migrate database
- rails g migration [descripe]
- rails db:migrate (to save migrade database after change)

# edit table
- rename_column :table_name, :old_column_name, :new_column_name (to rename column)
- rename_table :old_table_name, :new_table_name
- remove_column :table_name, :column_name, :column_type
- drop_table :table_name
- create_table :table_name do |t|
    t.string :column1_name
    t.integer :column2_name
    t.timestamps
- add_column :users, :new_column, :string

# to create new page run this comman
- rails g controller [controller name] [page name]
- ex. rails g controller registation index

# to set page into first page 
- /config/routes.rb
- add root "[controller name]#[page name]"

## --------- deployment ------------

## registor EC2 in AWS
- click Launch instance
- create name
- should OS (for me Mac OS)
- create new key pair (enter name)
- check Allow HTTPS traffic from the internet
- click Launch instance

## connect VM to local
- (open your instance and press connect)
- open terminal
- go to locate your private key file. (cd)
- run : chmod 400 "keyFileName.pem"
- connect with step 4 in web.

# (remark in VM we have to use sudo in almost all command) #

# setup work space in VM
- create foder work space (sudo mkdir yourFoderName)

# install docker in your VM
- go into your project (cd)
- run following command begin of Install using the apt repository (https://docs.docker.com/engine/install/ubuntu/)
- until you finish step 6

# set up file on VM
- create file docker-compose.yml (nano docker-compose.yml)
- wright docker-compose.yml following in this project
- create file .env (nano .env)

# set up docker and ci
- wright docker-compose.yml
- wright .github/workflows/ci.yml

# set up file on your project
- run: bundle install
- run: rails secret in terminal then get key into SECRET_KEY_BASE on VM
- get master.key in config/master.key then get into RAILS_MASTER on VM

# set up Github
- go to your project
- open setting
- click Secrets and variables
- click Action
- click New repository secrets
- type docker name to DOCKER_USERNAME
- Add secret
- then do the same thing with DOCKER_PASSWORD

# prepare your project to run on VM
- setup your ci file
- push some thing to github to tricker Git Acctions
- wait for Git Acctions passed

# pull your image from docker hub
- pull your image: sudo docker pull yourDockerHubName/yourImageName
- run: sudo docker images (then you will see your images)

# to run your image in VM
- cd to your work space
- run: sudo docker compose up (to start your server project)
- run: sudo docker compose down (to close your server)

## --------- deployment ------------

## to run your image in VM when have new commit
- run: sudo docker compose down
- sudo docker pull yourDockerHubName/yourImageName
- sudo docker images 
- sudo docker rmi yourOldImageId (to delete)
- sudo docker compose up