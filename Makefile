update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\d]+"|"version": "$(VERSION)"|' package.json
