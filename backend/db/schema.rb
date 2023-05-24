# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_24_010148) do
  create_table "todos", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", comment: "ToDoテーブル", force: :cascade do |t|
    t.string "title", comment: "タイトル"
    t.text "content", comment: " タスクの詳細な説明や内容"
    t.boolean "status", default: false, comment: "タスクの状態"
    t.string "priority", comment: "タスクの優先度"
    t.date "due_date", comment: "タスクの期限日"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
