class ApplicationController < ActionController::API
  include ActionController::Cookies

  def index
    user = User.all 
    render json: user 
  end

  private 

  def current_user
    User.find_by_id(session[:user_id])
  end


end
