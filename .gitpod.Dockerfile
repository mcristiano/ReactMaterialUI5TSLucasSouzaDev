
FROM gitpod/workspace-full:latest

# Install custom tools, runtime, etc.
# install-packages is a wrapper for `apt` that helps skip a few commands in the docker env.
USER root

RUN apt update
# RUN     install-packages \
RUN apt install \
          fonts-firacode \  
          mc \            
          binwalk \
          clang \
          tmux


USER gitpod

RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
