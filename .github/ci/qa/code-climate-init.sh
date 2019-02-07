#!/bin/sh



get_cc_test_reporter_url() {
  CC_TEST_REPORTER_TYPE="$TRAVIS_OS_NAME"
  if [[ "$TRAVIS_OS_NAME" == "osx" ]]
  then
    CC_TEST_REPORTER_TYPE="darwin"
  fi
  echo "https://codeclimate.com/downloads/test-reporter/test-reporter-latest-$CC_REPORTER_TYPE-amd64"
}

dl_cc_test_reporter() {
  CC_URL=$(get_cc_test_reporter_url)
  curl -L "$CC_URL" > ./cc-test-reporter
}

init_cc_test_reporter() {
  chmod +x ./cc-test-reporter
}

main() {
  dl_cc_test_reporter
  init_cc_test_reporter
}

main
