require 'rails_helper'

RSpec.describe Api::V1::TodosController, type: :controller do
  describe 'GET #index' do
    it 'returns all todos' do
      todo1 = create(:todo)
      todo2 = create(:todo)

      get :index

      expect(response).to be_successful
      expect(json_response).to eq([todo1, todo2])
    end
  end

  describe 'GET #show' do
    it 'returns the todo with the given id' do
      todo = create(:todo)

      get :show, params: { id: todo.id }

      expect(response).to be_successful
      expect(json_response).to eq(todo)
    end

    it 'returns a 404 error if the todo does not exist' do
      get :show, params: { id: 1 }

      expect(response).to have_http_status(404)
    end
  end

  describe 'POST #create' do
    it 'creates a new todo' do
      todo_params = {
        title: 'My todo',
        content: 'This is my todo',
        status: 'pending',
        priority: 1,
        due_date: Date.today
      }

      post :create, params: todo_params

      expect(response).to be_successful
      expect(json_response).to eq(Todo.last)
    end

    it 'returns a 422 error if the todo params are invalid' do
      todo_params = {
        title: ''
      }

      post :create, params: todo_params

      expect(response).to have_http_status(422)
    end
  end

  describe 'PUT #update' do
    it 'updates the todo with the given id' do
      todo = create(:todo)
      new_title = 'New title'

      put :update, params: { id: todo.id, title: new_title }

      expect(response).to be_successful
      expect(todo.reload.title).to eq(new_title)
    end

    it 'returns a 404 error if the todo does not exist' do
      put :update, params: { id: 1, title: 'New title' }

      expect(response).to have_http_status(404)
    end

    it 'returns a 422 error if the todo params are invalid' do
      todo = create(:todo)
      new_title = ''

      put :update, params: { id: todo.id, title: new_title }

      expect(response).to have_http_status(422)
    end
  end

  describe 'DELETE #destroy' do
    it 'deletes the todo with the given id' do
      todo = create(:todo)

      delete :destroy, params: { id: todo.id }

      expect(response).to have_http_status(204)
      expect(Todo.exists?(todo.id)).to be false
    end

    it 'returns a 404 error if the todo does not exist' do
      delete :destroy, params: { id: 1 }

      expect(response).to have_http_status(404)
    end
  end

  describe 'DELETE #destroy_all' do
    it 'deletes all todos' do
      create(:todo)
      create(:todo)

      delete :destroy_all

      expect(response).to have_http_status(204)
      expect(Todo.count).to eq(0)
    end
  end

  private

  def json_response
    JSON.parse(response.body)
  end
end
