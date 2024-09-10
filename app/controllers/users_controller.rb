class UsersController < ApplicationController
  def index
    @sending = "Register Form"
    @users = User.all
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path, notice: "Form submitted successfully!"
    else
      render :index
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
    redirect_to root_path, notice: "User deleted successfully!"
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :birthdate, :gender, :email, :phone, :subject)
  end
end
