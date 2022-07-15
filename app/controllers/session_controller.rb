class SessionController < ApplicationController
    skip_before_action :authorize, only: :create
    # skip_before_action :verify_authenticity_token

    def create
           padawan = Padawan.find_by(username: params[:username])
           if padawan&.authenticate(params[:password])
             session[:padawan_id] = padawan.id
             render json: padawan
           else
             render json: { error: "Invalid username or password" }, status: :unauthorized
       end
   end

   def destroy
       session.delete :user_id
       head :no_content
   end
end
