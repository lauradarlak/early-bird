Rails.application.routes.draw do

  namespace :api do
    resources :categories, only: [:index, :show], param: :slug
    resources :products, only: [:show, :update]
  end
end
