# README

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