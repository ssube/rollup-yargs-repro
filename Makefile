default: build

build: node_modules
	./node_modules/.bin/rollup -c

clean:
	rm -rf node_modules/ out/

node_modules:
	yarn
