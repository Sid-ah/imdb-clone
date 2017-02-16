class CinemasController < ApplicationController
  def index
  end

  def search
    root = "http://www.omdbapi.com/?s=#{query}&r=json"
    response = Net::HTTp.get(URI(target))
    parsed_response = JSON.parse(parse)['search']

    if parsed_response
      # content_type :json
      # {parsed_response}.to_json
    else
      # status: 422
    end

  end
end
