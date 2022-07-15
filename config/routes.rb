Rails.application.routes.draw do
  resources :courses
  resources :masters
  resources :padawans, only: [:index, :show, :update, :create]
  resources :sessions, only: [:index, :show, :update, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  post "/signup", to: "padawans#create"
  get "/me", to: "padawans#show"
end
