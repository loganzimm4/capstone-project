class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    before_action :authorize

private 
    def auth_error(object)
        render json: { errors: object}
      end
    
      def authorize
        @current_padawan = Padawan.find_by(id: session[:padawan_id])
    
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_padawan
      end
end
