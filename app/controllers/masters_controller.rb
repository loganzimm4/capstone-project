class MastersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record


    def index 
        masters = Master.all 
        render json: masters, status: :ok
    end 

    def show 
        master = Master.find(params[:id])
        render json: master, status: 200
    end

    def update 
        master = Master.find(params[:id])
        master.update!(master_params)
        render json: master, status: 202
    end

    private 

    def master_params 
        params.permit(:name, :age, :midichlorian_count)
    end

    def not_found 
        render json: {error: 'This is not the master you are looking for...'}, status: 404
    end

    def invalid_record 
        render json: {error: 'This Master is not ready for the trials...'}, status: 404
    end
end
