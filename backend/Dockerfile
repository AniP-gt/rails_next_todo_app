FROM ruby:3.2.0
RUN apt-get update -qq \
    && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    ruby-dev

WORKDIR /backend
COPY Gemfile /backend/Gemfile
COPY Gemfile.lock /backend/Gemfile.lock
RUN gem install bundler:2.3.22 \
    && gem install rubocop \
    && gem install solargraph \
    && bundle install
COPY . /backend

# Start the main process.
EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
