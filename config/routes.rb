Rails.application.routes.draw do
  root "users#index"
  resources :users, only: [ :index, :create, :destroy, :edit, :update ]
  # POST /submit_form
  post "/submit_form", to: "users#create"
end
