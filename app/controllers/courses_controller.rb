class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record


    def index 
        courses = Course.all 
        render json: courses, status: :ok
    end 

    def show 
        course = Course.find(params[:id])
        render json: course, status: 200
    end

    def create 
        course = Course.create!(course_params)
        render json: course, status: :created
    end

    def update 
        course = Course.find(params[:id])
        course.update!(course_params)
        render json: course, status: 202
    end

    def destroy 
        course = Course.find(params[:id])
        course.destroy
        render json: {error: 'This course has been deleted...'}, status: 200
    end

    private 

    def course_params 
        params.permit(:name, :time, :location, :master_id, :padawan_id)
    end

    def not_found 
        render json: {error: 'This is not the course you are looking for...'}, status: 404
    end

    def invalid_record 
        render json: {error: 'Your input is not yet complete...'}, status: 404
    end
end
