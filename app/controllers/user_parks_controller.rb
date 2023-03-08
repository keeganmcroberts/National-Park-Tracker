class UserParksController < ApplicationController

    def create 
        # find_user = User.find_by(id: session[:user_id])

        # if find_user 
        #     render json: find_user
        # params[:user_id] = session[:user_id]
        # params[:parkCode] = params[:id]
        
        new_user_park = UserPark.new(strong_params)
        
        if new_user_park.save
            render json: new_user_park
        else
            render json: {error:new_user_park.errors.full_messages}
        end
        
        # else
        #     render json: {error:"no good"}
        # end

    end



    # def index
    #     user_parks = UserPark.all.filter{ |eachUserPark| eachUserPark.user_id == session[:user_id]}
    #     render json: user_parks
    # end

    def index
        render json: UserPark.all
    end


    def destroy
        destroyed_park = UserPark.find_by!(id: params[:id])
        if destroyed_park
            destroyed_park.destroy 
            head :no_content 
        else
            item_not_found
        end
    

    end


    
    private

    def strong_params
        params.permit(:user_id, :parkCode, :liked)
    end

    def item_not_found
        render json: {error: "item not found"}
    end

end
