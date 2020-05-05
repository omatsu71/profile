Rails.application.routes.draw do
  resources :pages do
    collection do
      get "one"
      get "two"
      get "three"
    end
  end

  root "pages#index"

end
