class UsersController < ApplicationController



    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "Not autheticated", status: :unauthorized
        end
    end



    def create
        user = User.create(user_parans)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end



private

def user_params
    params.permit(:email, :password)
end

def current_user
    User.find_by_id(session[:user_id])
  end


end
