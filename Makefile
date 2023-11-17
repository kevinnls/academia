PROJ = 

ifndef PROJ
$(error variable $$PROJ needs to be defined)
endif


PACKAGE_SCRIPTS = { "scripts": { "dev": "eleventy --serve", "build": "eleventy" } }

POD_MOUNTS = \
	-w /app \
	-v $(PWD):/app:z \
	-v pnpm-global:/usr/local:Z \
	-v pnpm-store:/usr/local/share/pnpm:Z \
	-v pnpm-config:/node/.config/pnpm:Z \
	-v $(PROJ)_modules:/app/node_modules:z

POD_OPTIONS_TEMPLATE = \
	--interactive --tty \
	--rm \
	--name $(PROJ)_$(CONTAINER_TAG) \
	$(POD_MOUNTS) $(EXTRA_FLAGS) \
	node:alpine

dev: EXTRA_FLAGS = --publish 8080:8080
dev: SCRIPT = dev
dev: run

build: SCRIPT = build
build: run

run: CONTAINER_TAG = $(firstword $(SCRIPT))
run:
	podman run $(POD_OPTIONS_TEMPLATE) pnpm run $(SCRIPT)


sh: CONTAINER_TAG = sh
sh:
	podman run $(POD_OPTIONS_TEMPLATE) sh

