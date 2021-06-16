#!make

include: config/node.env
export

setup:
	sudo gem install bundler

install-js:
	npm install
	rsync -a node_modules/mathjax/ assets/js/npm/mathjax/
	rsync -a node_modules/mathjs/lib/browser/  assets/js/npm/mathjs/
	rsync -a node_modules/mathjs/README.md  assets/js/npm/mathjs/

install-gems:
	bundle config set --local path vendor/bundle
	bundle install

install: install-js install-gems

s serve: install
	bundle exec jekyll serve
	bundle exec jekyll serve --trace --livereload

build:
	JEKYLL_ENV=production bundle exec jekyll build --trace

clean:
	npm clean-install --prefix assets/js