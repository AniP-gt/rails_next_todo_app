class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos, comment: 'ToDoテーブル' do |t|
      t.string :title, comment: 'タイトル'
      t.text :content, comment: ' タスクの詳細な説明や内容'
      t.boolean :status, default: false, comment: 'タスクの状態'
      t.string :priority, comment: 'タスクの優先度'
      t.date :due_date, comment: 'タスクの期限日'

      t.timestamps
    end
  end
end
