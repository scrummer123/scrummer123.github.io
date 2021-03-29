#!/bin/sh

curl -X POST https://accounts.spotify.com/api/token -d grant_type=authorization_code -d code=AQA4dxqJ_qJkw3xu_xTWNHGQ3vEKFSh84OPm0ZjVz6qcUYtN2S_SqTreQO9vuHdYDxft5agdYLG6wsH1-KzVJ73KDpIVvlxiMlooT4AXqR-LT7rOR0EDKtkhxFMnTxfzhX_FSqWOWNcawdMUzf18seTdP0iwfx6d8nL3kO7nhsAQLZGEqQ -d redirect_uri=https://simon-instance.github.io/ -d client_id=2d3fa6644cb348e1b986908b79479f47 -d client_secret=4afe8149dd604cb9abf3b1565600cedc -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded"
