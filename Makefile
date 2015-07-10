install: .git/hooks/pre-commit
install: .git/hooks/pre-push

.git/hooks/pre-commit: script/hook.sh
	cp $< $@

.git/hooks/pre-push: script/hook.sh
	cp $< $@
