class UsersController < ApplicationController
  def index
    @sending = "Register Form"
    @users = User.all
    @user = User.new
    @users = search_users(@users)
    @users = filter_users_by_subject(@users)
  end
  
  def create
    @users = User.all
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path, notice: "Form submitted successfully!"
    else
      render :index, status: :unprocessable_entity
    end
  end
  
  def edit
    @users = User.all
    @user = User.find(params[:id])
    @sending = "Edit User"
    render :index
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to root_path, notice: "User updated successfully!"
    else
      @sending = "Edit User"
      render :index
    end
  end

  def cancle
    @user = User.new
    render :index
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    @users = User.all
    respond_to do |format|
      format.turbo_stream do
        if @users.any?
          render turbo_stream: turbo_stream.remove(@user)
        else
          render turbo_stream: turbo_stream.remove("card")
        end
      end
      format.html { redirect_to users_path, notice: "User deleted successfully!" }
    end
  end

  private
  def search_users(users)
    if params[:query].present?
      users = User.search(params[:query])
    end
    users
  end

  def filter_users_by_subject(users)
    if params[:subject].present?
      if params[:subject] == "All"
        users = User.all
      else
        users = users.where(subject: params[:subject])
      end
    end
    users
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :birthdate, :gender, :email, :phone, :subject)
  end
end
