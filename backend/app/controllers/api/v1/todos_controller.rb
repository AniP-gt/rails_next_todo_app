class Api::V1::TodosController < ApplicationController
  def index
    todos = Todo.all
    render json: todos
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def create
    todo = Todo.new(create_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors, status: 422
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(update_params)
      render json: todo
    else
      render json: todo.errors, status: 422
    end
  end

  def destroy
    if Todo.destroy(params[:id])
      head :no_content
    else
      render json: { error: 'Failed to destroy' }, status: 422
    end
  end

  def destroy_all
    if Todo.destroy_all
      head :no_content
    else
      render json: { error: 'Failed to destroy' }, status: 422
    end
  end

  private

  def create_params
    params.permit(:title,
                  :content,
                  :priority,
                  :due_date
                 )
  end

  def update_params
    params.permit(:id,
                  :title,
                  :content,
                  :priority,
                  :due_date,
                  :status
                 )
  end
end
