class SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      # compares user logging-in email and password and finds/authenticates user info in the database
     
       session[:user_id] = user.id
       render json: user, status: :ok
    end


  end

  def destroy
  end
end
