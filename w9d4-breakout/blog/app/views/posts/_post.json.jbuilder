json.extract! post, :id, :title, :text, :author_id, :created_at, :updated_at
json.url post_url(post, format: :json)
