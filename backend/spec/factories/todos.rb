FactoryBot.define do
  factory :todo do
    title { "My todo" }
    content { "This is my todo" }
    status { "pending" }
    priority { 1 }
    due_date { Date.today }
  end
end
