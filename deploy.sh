GAE_SERVICE="default"
GAE_PROJECT="umuzi-prod"
VERSION=$(git rev-parse --short HEAD)$(date "+%F-%H%M") 


gcloud app deploy app-staging.yaml --project $GAE_PROJECT --version "$VERSION" --no-promote
