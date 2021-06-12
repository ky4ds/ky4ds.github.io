#!make

include: config/node.env
export

setup:
	sudo gem install bundler

install-js:
	npm install --prefix assets/js

install-gems:
	bundle config set --local path vendor/bundle
	bundle install

install: install-js install-gems

s serve:
	bundle exec jekyll serve
	bundle exec jekyll serve --trace --livereload

build:
	JEKYLL_ENV=production bundle exec jekyll build --trace

clean:
	npm clean-install --prefix assets/js