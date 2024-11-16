# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# Jekyll Core
gem "jekyll", "~> 4.1.1" # Use a compatible Jekyll version for Ruby 2.7

# Required for Ruby 2.7 and Jekyll
gem "webrick", "~> 1.7"

group :jekyll_plugins do
    gem 'jekyll-sitemap'
    gem 'jekyll-seo-tag'
    gem "jekyll-autoprefixer", "~> 1.0.2" # Matches Autoprefixer's version
end

# Use older `listen` gem compatible with Ruby 2.7
gem "listen", "~> 3.2"
