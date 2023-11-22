#!/bin/bash

export WORK_DIR=~/haiz14.github.io/

tmux new -d -s website

tmux send-keys -t 1 'cd ~/haiz14.github.io/' Enter 'vi -S' Enter
tmux new-window -d -t 2 -n 'help' 'cd ~/skeleton/sites/skeleton.dev/ && vi -S'
tmux new-window -d -t 3 -n 'cmds'
tmux new-window -d -t 7 -n 'main server' 'cd ~/haiz14.github.io/ && npm run dev'
tmux new-window -d -t 8 -n 'skeleton-docs' 'cd ~/skeleton/sites/skeleton.dev/ && npm run dev -- --port 7002'
# tmux new-window -d -t 9 -n 'docs' 'cd ~/tailwind/ && python -m http.server 7001'
tmux attach
tmux set-window -t 1
 
