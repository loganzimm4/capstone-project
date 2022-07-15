class PadawansController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

skip_before_action :authorize, only: :create

    def index 
        padawans = Padawan.all 
        render json: padawans, status: :ok
    end 

    def show 
        render json: @current_padawan
    end

    def create 
        padawan = Padawan.create!(padawan_params)
        session[:padawan_id] = padawan.id
        render json: padawan, status: :created
    end

    def update 
        padawan = Padawan.find(params[:id])
        padawan.update!(padawan_params)
        render json: padawan, status: 202
    end

    private 

    def padawan_params 
        params.permit(:name, :age, :midichlorian_count, :username, :password)
    end

    def not_found 
        render json: {error: 'This is not the padawan you are looking for...'}, status: 404
    end

    def invalid_record 
        render json: {error: 'This padawan has insufficient training...'}, status: 404
    end
end
