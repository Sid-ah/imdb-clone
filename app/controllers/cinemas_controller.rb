class CinemasController < ApplicationController
  def index
  end

  def search
    root = "http://www.omdbapi.com/?s=#{params[:keyword]}&r=json"
    response = Net::HTTP.get(URI(root))
    parsed_response = JSON.parse(response)['Search']
    if parsed_response
      render json: parsed_response
    else
      status 422
    end

  end
end
