Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # ヘルスチェック
  get '/health_check', to: 'health_checks#index'
  # 記事一覧
  get '/events', to: 'events#index'
  # 記事詳細  
  get '/events/:id', to: 'events#show'
  # 記事作成
  post '/events', to: 'events#create'

  delete '/events/:id', to: 'events#destroy'
  # Defines the root path route ("/")
  # root "articles#index"
end
