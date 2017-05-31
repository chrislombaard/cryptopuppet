_checkfiles = crumpet/
checkfiles = $(_checkfiles) *.py

mypy_flags = --ignore-missing-imports --follow-imports=silent --check-untyped-defs --warn-no-return --warn-unused-ignores

flake8_flags = --max-line-length=100

pylint_flags = --max-line-length=100
# pylint_flags = --max-line-length=120 --disable=E1126
# ! False positives ... python 3.5.3+ #1295 - https://github.com/PyCQA/pylint/issues/1295

help:
	@echo  "usage: make <target>"
	@echo  "Targets:"
	@echo  "    requirements	Update requirements files."
	@echo  "    deps			Ensure dependencies are installed."
	@echo  "    lint			Reports pylint violations."
	@echo  "    check			Checks that build is sane."
	@echo  "    test			Runs all tests."
	@echo  "    train			Re-trains the system and replaces the training data."

up:
	@cp etc/requirements.in requirements.txt
	@pip-compile -o requirements_dev.txt etc/requirements_dev.in -U

deps:
	@pip-sync requirements_dev.txt

run: deps
	@DJANGO_SETTINGS_MODULE="project.settings" ./manage.py runserver 0.0.0.0:8001

lint: deps
	@-python setup.py check -mrs
	@-mypy $(mypy_flags) $(_checkfiles)
	@-pylint $(pylint_flags) $(checkfiles)  # ! False positives ... python 3.5.3+ #1295 - https://github.com/PyCQA/pylint/issues/1295
	@-flake8 $(flake8_flags) $(checkfiles)

check: deps
	@python setup.py check -mrs
	@mypy $(mypy_flags) --incremental $(_checkfiles)
	@pylint -E $(pylint_flags) $(checkfiles) # ! False positives ... python 3.5.3+ #1295 - https://github.com/PyCQA/pylint/issues/1295
	@flake8 $(flake8_flags) $(checkfiles)

test: deps
	@coverage run --rcfile=.coveragerc -m unittest discover
	@coverage html
	@coverage report

documents:
	@python setup.py build_sphinx -E

travis: check test # bench

migrate:
	@python manage.py makemigrations
	@python manage.py migrate

su:
	@python manage.py createsuperuser
