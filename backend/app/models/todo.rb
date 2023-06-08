class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :status, inclusion: { in: [true, false] }
  validates :priority, inclusion: { in: %w[high medium low] }
end
