SAMPLE_TODOS = [
  {
    title: '明日洗濯',
    content: '洗濯回す',
    priority: 'medium',
    due_date: '2023-05-30'
  },
  {
    title: '明日勉強',
    content: '英語と数学を勉強する',
    priority: 'high',
    due_date: '2023-05-30'
  },
  {
    title: '明日ご飯の用意',
    content: 'カレーと牛丼を作る',
    priority: 'low',
    due_date: '2023-05-30'
  }
]

SAMPLE_TODOS.each do |todo|
  Todo.create(todo)
end
