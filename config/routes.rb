Rails.application.routes.draw do
  
  # resources :users, only: [:index, :show, :create, :update]
  get "sign_up", to: "registrations#new"
  post "/users", to: "users#create"
  # get "about", to: "about#index"
  # get "/", to: "main#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
