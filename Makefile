
##
# variables
##

CWD=`pwd`
FILE=*.test.js
FILES=`find test -name '$(FILE)' -type f -print0 | xargs -0 echo`

##
# default task: when you just run `make`
##

default: test

test:
	@whiskey --sequential --failfast -c "$(CWD)/lib/" -t "$(FILES)"

coverage:
	@whiskey --sequential --failfast -c "$(CWD)/lib" \
		--coverage --coverage-reporter cli -t "$(FILES)"

.PHONY: test coverage

