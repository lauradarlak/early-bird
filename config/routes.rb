Rails.application.routes.draw do

  namespace :api do
    resources :categories, only: [:index, :show], param: :slug
    resources :products, only: [:show, :update]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
