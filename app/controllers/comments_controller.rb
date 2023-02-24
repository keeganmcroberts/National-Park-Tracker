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


    private

    def strong_params
        params.permit(:comment)
    end
        
    end