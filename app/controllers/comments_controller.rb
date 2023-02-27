class CommentsController < ApplicationController


    def index
        render json: Comment.all
    end

    def create
        newComment = Comment.create(strong_params)

        if newComment.save
            render json: newComment, status: :created

        else
            render json: newComment.errors, status: :unproccessable_entity
        end
    end

    def destroy
        destroyed_comment = Comment.find_by!(id: params[:id])
        if destroyed_comment
            destroyed_comment.destroy 
            head :no_content 
        else
            item_not_found
        end
    

    end


    private

    def strong_params
        params.permit(:comment, :parkCode)
    end
        
    def item_not_found
        render json: {error: "item not found"}
    end


    end