class UserParksController < ApplicationController

    def create 
        find_user = User.find_by(id: session[:user_id])

        if find_user 
            render json: find_user
        # params[:user_id] = session[:user_id]
        # params[:parkCode] = params[:id]
        
        new_user_park = UserPark.new(strong_params)
        
        if new_user_park.save
            render json: new_user_park
        else
            render json: {error:new_user_park.errors.full_messages}
        end
        
        else
            render json: {error:"no good"}
        end

    end

    private

    def strong_params
        params.permit(:user_id, :parkCode, :liked)
    end
end
