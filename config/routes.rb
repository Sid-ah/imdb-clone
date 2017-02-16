Rails.application.routes.draw do
  root to: "cinemas#index"
  get 'cinemas/search/:keyword', to: 'cinemas#search'
end
