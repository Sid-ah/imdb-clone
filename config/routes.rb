Rails.application.routes.draw do
  root to: "cinemas#index"
  get 'cinemas/:id', to: 'cinemas#show'
  get 'cinemas/search/:keyword', to: 'cinemas#search'
end
